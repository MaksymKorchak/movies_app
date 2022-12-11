import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { Typography, Grid } from "@mui/material";
import { MOVIES_BY_IDS_QUERY } from "./queries";
import { MovieCard } from "../../components";
import { FormattedMessage } from "react-intl";

const Recommend = () => {
  const [searchParams] = useSearchParams();
  const [params, setparams] = useState({
    ids: [],
    title: "",
  });
  const { loading, error, data } = useQuery(MOVIES_BY_IDS_QUERY, {
    variables: { ids: params.ids },
  });

  useEffect(() => {
    const ids = searchParams.get("ids");
    const title = searchParams.get("title");
    setparams({
      ids: ids.split(",").map((id) => +id),
      title,
    });
  }, [searchParams]);

  if (loading) {
    <div>
      <FormattedMessage id="loading"/>
    </div>;
  }

  if (error) {
    <div>Error. Try again!</div>;
  }

  return (
    <>
      <Typography variant="h2" align="center" sx={{textTransform: "uppercase", fontWeight: "bold", padding: "24px 0"}}>
        {params.title}
      </Typography>
      {data?.moviesByIds && (
        <Grid container spacing={2}>
          {data.moviesByIds.map((movie) => (
            <Grid key={movie.id} item xs={12} sm={6} md={4} lg={3}>
              <MovieCard movie={movie} isPreviewMode/>
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default Recommend;
