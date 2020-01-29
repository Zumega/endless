import React  from 'react';
import './Genres.scss'
// import PropTypes from 'prop-types';

const GenresContainer = ({genres, handleGenre}) => {
  return (
    <div className="genresContainer">
      <h2>Genres:</h2>
      <ul className="menu">
        {
          genres.map(genre => (
            <li className="genre" key={genre} onClick={() => handleGenre(genre)}>{genre}</li>
          ))
        }
      </ul>
    </div>
  );
};

// GenresContainer.propTypes = {
//   genres: PropTypes.arrayOf(
//     PropTypes.string.isRequired
//   ).isRequired,
//   handleGenre: PropTypes.func.isRequired
// };

export default GenresContainer;