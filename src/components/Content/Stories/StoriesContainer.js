import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import './Stories.scss';
import GenresContainer from './Genres/GenresContainer';
import Stories from './Genres/Stories/Stories';
import AuthorsContainer from './Authors/AuthorsContainer';
import { simpleString } from '../../Utility/Utilities';

const StoriesContainer = ({genres, stories, authorsData}) => {
  const [genre, setGenre] = useState(null);
  const [story, setStory] = useState(null);

  const handleGenre = genre => {
    setGenre(genre);
    setStory(stories[simpleString(genre)])
  };

  return (
    <div className="">
      <div className="">
        <GenresContainer genres={genres} handleGenre={handleGenre} />
        {
          story && story.length > 0 && <Stories genre={genre} stories={story} />
        }
      </div>
      {
        <AuthorsContainer data={authorsData} />
      }
    </div>
  );
};

// StoriesContainer.propTypes = {};

export default StoriesContainer;