import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { simpleString } from '../../Utility/Utilities';

const Stories = ({ genre, stories }) => {
  return (
    <div className="col-14">
      <h2>{genre} Stories:</h2>
      <ul>
        {
          stories.map((story) => (
            <li key={story.id}>
              <Link to={'/stories/' + simpleString(genre) + '/' + story.id}>{story.name}</Link>
              <p>{story.blurb}</p>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

Stories.propTypes = {
  genre: PropTypes.string.isRequired,
  stories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      blurb: PropTypes.string.isRequired
    }).isRequired
  )
};

export default Stories;