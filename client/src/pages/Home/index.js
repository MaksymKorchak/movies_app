import { Grid, Box, Paper, Pagination, Stack } from "@mui/material";
import { MovieCard, SelectedMoviesSection, Filters } from "../../components";
import { useQuery } from "@apollo/client";
import { MOVIES_QUERY } from "./queries";
import { useMovies } from "../../hooks/useMovies";
import { FormattedMessage } from "react-intl";
import { useFilters } from "../../hooks/useFilters";

const Home = () => {
  const { filter, setPage, setFilter } = useFilters();
  const {loading, error, data} = useQuery(MOVIES_QUERY, { variables: { filter }});
  const { selectedMovies, selectMovie, deleteMovie } = useMovies();

  const handlePagination = (event, page) => {
	  setPage(page)
  };

  const pagesCount = data?.movies?.totalPages <= 500 ? data?.movies?.totalPages : 500;

  const onSubmit = (data) => {
    setFilter(data)
  }

  if (error) return <FormattedMessage id="something_wrong"/>;

  return (
    <Box sx={{ flexGrow: 1, marginTop: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper sx={{padding: 2}}>
            <Filters onSubmit={onSubmit} initialValues={filter}/>
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper>
            <Box sx={{ padding: 1 }}>
              {loading && <FormattedMessage id="loading"/>}
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
                      page = {filter.page}
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
