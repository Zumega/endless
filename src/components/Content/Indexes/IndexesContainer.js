import React  from 'react';
import GenresContainer from '../Stories/Genres/GenresContainer';
// import PropTypes from 'prop-types';

const IndexesContainer = ({ genres, handleGenre }) => {
  // TODO needs a lot of work!
  return <GenresContainer genres={genres} handleGenre={handleGenre} />;
};

IndexesContainer.propTypes = {};

export default IndexesContainer;