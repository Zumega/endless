import React from 'react';
import './Genres.scss';
import { Actions } from '../../store/Actions';
import { MemoContainer } from '../MemoContainer';
import { useBaseStore } from '../Utility/Hooks/useBaseStore';
import { useStore } from '../Utility/Hooks/useStore';

export const Genres = () => {
  const { genres } = useBaseStore('GenresContainer');
  const { dispatch } = useStore('GenresContainer');

  const handleGenre = genre => {
    dispatch({ type: Actions.GENRE, payload: genre });
  };

  return (
    <MemoContainer data={[genres]}>
      <div data-id="Genres" className="genresContainer col-10">
        <h2>Genres:</h2>
        <div>
          <ul className="menu">
            {genres.map(genre => (
              <li className="genre" key={genre} onClick={() => handleGenre(genre)}>
                {genre}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </MemoContainer>
  );
};
