import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GenresContainer extends Component {
  render () {
    const {
      genres,
      handleGenre
    } = this.props;

    return (
      <div>
        <h2>Genres:</h2>
        <ul>
          {
            genres.map(genre => (
              <li key={genre} onClick={() => handleGenre(genre)}>{genre}</li>
            ))
          }
        </ul>
      </div>
    );
  }
}

GenresContainer.propTypes = {
  genres: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
  handleGenre: PropTypes.func.isRequired
}

export default GenresContainer;