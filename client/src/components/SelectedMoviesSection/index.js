import { MovieCardSelected, SelectedMoviesForm } from "../../components";
import noMoviesImgSrc from "../../assests/images/no_movies.png";
import { Box, Paper, Typography, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

const SelectedMovies = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    height: 'calc(100vh - 140px)',
    position: 'sticky',
    top: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column'
  }));

  const NoMovies = styled(Box)(({ theme }) => ({
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
  }));

  const MoviesList = styled(Stack)(({ theme }) => ({
    overflow: 'scroll',
    height: '100%'
  }));

const SelectedMoviesSection = ({ selectedMovies, deleteMovie }) => {

    if(!selectedMovies.length) {
        return (
            <SelectedMovies>
                <NoMovies>
                    <Box 
                        component="img"
                        sx={{width: "60%", opacity: .7}}
                        alt="No movies."
                        src={noMoviesImgSrc}
                    />
                   <Typography variant="h5" mt={2}>
                        No movies selected yet...
                   </Typography>
                </NoMovies>
            </SelectedMovies>
        )
    }

    return (
        <SelectedMovies>
            <MoviesList spacing={2}>
                {selectedMovies.map((movie) => (
                    <MovieCardSelected 
                        key={movie.id} 
                        movie={movie}
                        onCardDelete={deleteMovie}
                    />
                ))}
            </MoviesList>
            <Box pt={2}>
                <SelectedMoviesForm/>
            </Box>
        </SelectedMovies>
    )
}

export default SelectedMoviesSection;