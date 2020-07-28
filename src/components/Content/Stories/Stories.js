import React from 'react';
import { Link } from 'react-router-dom';

import { simpleString } from '../../Utility/Utilities';
import MemoContainer from '../../MemoContainer';
import useStore from "../../Utility/Hooks/useStore";

const Stories = () => {
  const {stories, genre} = useStore('Stories');
  const genreStories = stories[simpleString(genre)];

  return (
    <MemoContainer data={[stories, genre]}>
      {
        genreStories && genreStories.length > 0 ?
          (
            <div className="col-14">
              <h2>{genre} Stories:</h2>
              <ul>
                {
                  genreStories.map((story) => (
                    <li key={story.id}>
                      <Link to={'/stories/' + simpleString(genre) + '/' + story.id}>{story.name}</Link>
                      <p>{story.blurb}</p>
                    </li>
                  ))
                }
              </ul>
            </div>
          ) : null
      }
    </MemoContainer>
  );
};

export default Stories;