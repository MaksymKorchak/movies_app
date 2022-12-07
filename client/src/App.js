import { CssBaseline, Container, Box } from "@mui/material";
import { Navigation } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Settings, Recommend } from "./pages";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { GQL_SERVER_URL } from "./config";

const App = () => {
  const client = new ApolloClient({
    uri: GQL_SERVER_URL,
    cache: new InMemoryCache(),
	connectToDevTools: true
  });

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <CssBaseline />
        <Navigation />
        <Box sx={{ backgroundColor: (theme) => theme.palette.grey[100] }}>
          <Container maxWidth="xl">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/recommend" element={<Recommend />} />
            </Routes>
          </Container>
        </Box>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
