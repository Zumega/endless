import React from 'react';
import './Genres.scss';
import { Actions } from '../../store/Actions';
import { MemoContainer } from '../Memo/MemoContainer';
import { useBaseStore } from '../Utility/Hooks/useBaseStore';
import { useStore } from '../Utility/Hooks/useStore';
import { NavLink } from 'react-router-dom';
import { simpleString } from '../Utility/Utilities';

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
              <li className="genre" key={genre}>
                <NavLink to={`/stories/${simpleString(genre)}`}>{genre}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </MemoContainer>
  );
};
