import React from 'react';
import PropTypes from 'prop-types';

const Stories = ({ genre, stories }) => {
  return (
    <div>
      <h2>{genre} Stories:</h2>
      <ul>
        {
          stories.map((story) => (
            <li key={story.id}>
              <a>{story.name}</a>
              <p>{story.blurb}</p>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

Stories.propTypes = {
  genre: PropTypes.string.isRequired,
  stories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      blurb: PropTypes.string.isRequired
    }).isRequired
  )
}

export default Stories;