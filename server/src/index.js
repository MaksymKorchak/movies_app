const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const { ApolloServerPluginDrainHttpServer } = require("@apollo/server/plugin/drainHttpServer");
const { json } = require("body-parser");
const express = require("express");
const fs = require("fs");
const http = require("http");
const path = require("path");
const cors = require("cors");
const Query = require("./resolvers/Query");

const resolvers = {
  Query,
};

const typeDefs = fs.readFileSync(
    path.join(__dirname, 'schema.graphql'),
    'utf8'
  );

async function startApolloServer(typeDefs, resolvers) {
  const app = express();
  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();
  
  app.use(
    "/graphql",
    cors(),
    json(),
    expressMiddleware(server, {
        context: async ({ req }) => ({ locale: req?.headers?.locale || "en-US" }),
    })
  );

  app.use(express.static(path.join(__dirname, "../../client", "build")));
  app.use(express.static("public"));

  app.get("/rest", (req, res) => {
    res.json({ data: "rest" });
  });

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../client", "build", "index.html"));
  });

  await new Promise((resolve) => httpServer.listen({ port: 4000  }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000/graphql`);
}

startApolloServer(typeDefs, resolvers);
