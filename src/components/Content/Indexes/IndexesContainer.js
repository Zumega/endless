import React, { useState }  from 'react';
import GenresContainer from '../Genres/GenresContainer';
import Stories from "../Stories/Stories";
import {simpleString} from "../../Utility/Utilities";

const IndexesContainer = ({ genres, stories }) => {
  const [genre, setGenre] = useState(null);
  const [story, setStory] = useState(null);

  const handleGenre = genre => {
    setGenre(genre);
    setStory(stories[simpleString(genre)])
  };

  return <>
    <GenresContainer genres={genres} handleGenre={handleGenre} />
    {
      story && story.length > 0 && <Stories genre={genre} stories={story} />
    }
  </>;
};

IndexesContainer.propTypes = {};

export default IndexesContainer;