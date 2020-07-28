import React from 'react';
import Actions from '../../../store/Actions';
import './Genres.scss'
import MemoContainer from '../../MemoContainer';
import useStore from "../../Utility/Hooks/useStore";

const Genres = () => {
  const {genres, dispatch} = useStore('GenresContainer');

  const handleGenre = genre => {
    dispatch({type: Actions.GENRE, payload: genre});
  };

  return (
    <MemoContainer data={[genres]}>
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
    </MemoContainer>
  );
};

export default Genres;