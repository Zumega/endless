import React from 'react';
import PropTypes from 'prop-types';

const StoryGroup = ({stories}) => {
  return (
    <ul>
      {
        stories.map((story, k) => (
          <li key={story.name}>
            {story.name}
          </li>
        ))
      }
    </ul>
  );
};

StoryGroup.propTypes = {
  stories: PropTypes.array.isRequired
};

export default StoryGroup;