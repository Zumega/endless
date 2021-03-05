import React from 'react';
import PropTypes from 'prop-types';
import useStore from "../../Utility/Hooks/useStore";
import Actions from "../../../store/Actions";

const StoryGroup = ({stories}) => {
  const {libraryCard, dispatch} = useStore('Author');

  const handleClick = (userId, storyId) => {
    dispatch({type: Actions.STORY_EDIT, payload: {userId, storyId}});
  };

  return (
    <ul>
      {
        stories.map((story, k) => (
          <li key={story.name} onClick={() => handleClick(libraryCard, story)}>
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