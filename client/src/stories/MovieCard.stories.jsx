import React from 'react';
import { MovieCard } from '../components';
import { movies } from './stub';

export default {
  title: 'Card/MovieCard',
  component: MovieCard,
};

const Template = (args) => <MovieCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  movie: movies[0]
}


