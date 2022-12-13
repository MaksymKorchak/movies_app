const { getDetails, discoverMovie } = require('../modules/movies');
const { Movie } = require('../modules/movies/entities/Movie');
const { getList } = require('../modules/genres');

async function movies (parent, args, { locale }) {
    const data = await discoverMovie(args.filter, locale);

    return data;
};

async function moviesByIds (parent, { ids }, { locale }) {
    const requests = ids.map((id) => getDetails(id, locale));
    const data = await Promise.all(requests);
    const movies = data.map((movie) => new Movie(movie.data));
    
    return movies;
};

async function genres(_, {}, { locale }) {
    return await getList(locale)
}

module.exports = {
    movies,
    moviesByIds,
    genres
}