import { useState } from "react";
import { Grid, Box, Paper, Pagination, Stack } from "@mui/material";
import { MovieCard, SelectedMoviesSection } from "../../components";
import { useQuery } from "@apollo/client";
import { MOVIES_QUERY } from "./queries";
import { useMovies } from "../../hooks/useMovies";

const Home = () => {
  const [page, setPage] = useState(1);
  const {loading, error, data} = useQuery(MOVIES_QUERY, { variables: { page }});
  const { selectedMovies, selectMovie, deleteMovie } = useMovies();

  const handlePagination = (event, page) => {
	  setPage(page)
  };

  const pagesCount = data?.movies?.totalPages <= 500 ? data?.movies?.totalPages : 500;

  if (error) return "Something went wrong ...Pls reload a page";

  return (
    <Box sx={{ flexGrow: 1, marginTop: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper>Filter section</Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper>
            <Box sx={{ padding: 1 }}>
              {loading && "loading..."}
              {data && (
                <Grid container spacing={2}>
                  {data.movies.results.map((movie) => (
                    <Grid key={movie.id} item xs={12} sm={6} md={4} lg={3}>
                      <MovieCard movie={movie} onCardSelect={selectMovie}/>
                    </Grid>
                  ))}
                  <Stack sx={{ margin: "auto", py: 4}}>
                    <Pagination
                      count={pagesCount}
                      page = {page}
                      size="small"
                      onChange={handlePagination}
                      color="primary"
                    />
                  </Stack>
                </Grid>
              )}
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
		  <SelectedMoviesSection selectedMovies={selectedMovies} deleteMovie={deleteMovie}/>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
