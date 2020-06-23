import React, { useContext } from 'react';
import Actions from "../../../store/Actions";
import {Context} from "../../../store/Store";
import './Genres.scss'

const GenresContainer = () => {
  const [{genres}, dispatch] = useContext(Context);

  const handleGenre = genre => {
    dispatch({type: Actions.GENRE, payload: genre});
  };

  return (
    <div className="genresContainer col-10">
      <h2>Genres:</h2>
      <div className="">
        <ul className="menu">
          {
            genres.map(genre => (
              <li className="genre" key={genre} onClick={() => handleGenre(genre)}>{genre}</li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default GenresContainer;