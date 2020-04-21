import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import './Stories.scss';
// import GenresContainer from '../Genres/GenresContainer';
// import Stories from '../Stories/Stories';
import AuthorsContainer from '../Authors/AuthorsContainer';
import { simpleString } from '../../Utility/Utilities';
// import genres from "../../../data/genres";
import IndexesContainer from "../Indexes/IndexesContainer";

const StoriesContainer = ({genres, stories, authorsData}) => {
  const [genre, setGenre] = useState(null);
  const [story, setStory] = useState(null);

  const handleGenre = genre => {
    setStory(stories[simpleString(genre)])
  };

  return (
    <>
      <div className="row">
        <div className="container">
          <div className="row">
            <IndexesContainer genres={genres} stories={stories} handleGenre={() => console.log('things')} />
          </div>
        </div>
      </div>
      {
        <AuthorsContainer data={authorsData} />
      }
    </>
  );
};

// StoriesContainer.propTypes = {};

export default StoriesContainer;