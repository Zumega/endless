import React from 'react';
import { array } from 'prop-types';
import { useStore } from '../Utility/Hooks/useStore';
import { Actions } from '../../store/Actions';

export const StoryGroup = ({ stories }) => {
  const { libraryCard, dispatch } = useStore('Author');

  const handleClick = (userId, storyId) => {
    dispatch({ type: Actions.STORY_EDIT, payload: { userId, storyId } });
  };

  return (
    <ul>
      {stories.map((story, k) => (
        <li key={story.name} onClick={() => handleClick(libraryCard, story)}>
          {story.name}
        </li>
      ))}
    </ul>
  );
};

StoryGroup.propTypes = {
  stories: array.isRequired
};
