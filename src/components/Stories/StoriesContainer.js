import React, { useEffect } from 'react';
import './Stories.scss';
import { Authors } from '../Authors/Authors';
import { Indexes } from '../Indexes/Indexes';
import { useStore } from '../Utility/Hooks/useStore';
import { Actions } from '../../store/Actions';

export const StoriesContainer = ({ genreId }) => {
  const { dispatch } = useStore('StoriesContainer');
  useEffect(() => {
    if (genreId) {
      dispatch({
        type: Actions.GENRE,
        payload: genreId
      });
    }
  }, [genreId]);

  return (
    <>
      <div className="row">
        <div className="container">
          <div className="row">
            <Indexes />
          </div>
        </div>
      </div>
      <hr />
      <Authors />
    </>
  );
};
