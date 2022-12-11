import { useContext, useState } from 'react';
import { MovieCardSelected, SelectedMoviesForm, ConfirmModal } from "../../components";
import noMoviesImgSrc from "../../assests/images/no_movies.png";
import { Box, Paper, Typography, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { FormattedMessage } from 'react-intl';
import { AppContext } from '../../providers/context';

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
    const [listName, setListName] = useState('');
    const [link, setLink] = useState('');
    const { state } = useContext(AppContext);

    const onSubmit = ({ listName }) => {
        const ids = selectedMovies.map(({ id }) => id);
        const link = `${window.location.host}/recommend?title=${listName}&locale=${state.locale}&ids=${ids.join()}`;
        setListName(listName);
        setLink(link);
    };

    const onCloseConfirmModal = () => {
        setLink('');
    }

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
                        <FormattedMessage id="no_movies_selected"/>
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
                <SelectedMoviesForm onSubmit={onSubmit}/>
            </Box>
            <ConfirmModal
                url={link} 
                title={listName}
                open={!!link}
                onClose = {onCloseConfirmModal}/>
        </SelectedMovies>
    )
}

export default SelectedMoviesSection;