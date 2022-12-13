import PropTypes from "prop-types";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  styled
} from "@mui/material";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import dummyImage from '../../assests/images/movie_dummy_image.jpeg'

const CardInfo = styled(CardContent)(({ theme }) => ({
  "&:last-child": {
    paddingBottom: theme.spacing(2),
  },
}));

const PlusIcon = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  width: "100%",
  height: "100%",
  opacity: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "rgba(255, 255, 255, .3)",
  cursor: "pointer",
  "&:hover": {
    opacity: 1,
  },
}));

const MovieCard = ({ movie, onCardSelect, isPreviewMode }) => {
  return (
    <Card sx={{ position: "relative", height: "100%" }}>
      <Box sx={{ position: "relative" }}>
        <CardMedia
            component="img" 
            height="250" 
            image={movie.image || dummyImage} 
            alt={movie.title} />

        {!isPreviewMode && (
          <PlusIcon onClick={() => onCardSelect(movie)}>
            <AddBoxOutlinedIcon sx={{ fontSize: 50 }} />
          </PlusIcon>
        )}
      </Box>

      <CardInfo>
        <Typography variant="h5" gutterBottom fontSize="1.25rem" fontWeight="700">
          	{movie.title}
        </Typography>
        <Typography variant="subtitle1">
          	{movie.releaseDate}
        </Typography>
      </CardInfo>
    </Card>
  );
};

MovieCard.propTypes = {
    movie: PropTypes.shape({
        image: PropTypes.string,
        title: PropTypes.string.isRequired,
        releaseDate: PropTypes.string
    }).isRequired,
    onCardSelect: PropTypes.func,
    isPreviewMode: PropTypes.bool
}

export default MovieCard;
