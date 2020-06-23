import React, { useContext } from 'react';
import {Context} from "../../../store/Store";
import { Link } from 'react-router-dom';

import { simpleString } from '../../Utility/Utilities';

const Stories = () => {
  const [{stories, genre}] = useContext(Context);
  const genreStories = stories[simpleString(genre)];

  return genreStories && genreStories.length > 0 ?
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
    ) : null;
};

export default Stories;