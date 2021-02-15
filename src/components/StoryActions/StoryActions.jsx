import React from 'react';
import { Actions } from '../../store/Actions';
import { useStore } from '../Utility/Hooks/useStore';
import { MemoContainer } from '../MemoContainer';

export const StoryActions = () => {
  const { dispatch, flagStory, fullScreen, story } = useStore('StoryActions');

  const handleFullScreen = () => {
    dispatch({ type: Actions.FULL_SCREEN, payload: !fullScreen });
  };

  const handleFlag = () => {
    dispatch({ type: Actions.FLAG_STORY, payload: story.id });
  };

  const handleThumbUp = () => {
    dispatch({ type: Actions.STORY_THUMB_UP, payload: story.id });
  };

  const handleThumbDown = () => {
    dispatch({ type: Actions.STORY_THUMB_DOWN, payload: story.id });
  };

  return (
    <MemoContainer data={[fullScreen, flagStory, story]}>
      <div data-id="StoryActions" className="row">
        {/* Options for reader and editor */}
        <ul className="menu">
          <li className="col-4">
            <button onClick={handleFullScreen}>{fullScreen ? 'Menu' : 'Full Screen'}</button>
          </li>
          <li className="col-4">
            <button onClick={handleFlag}>Flag</button>
          </li>
          <li className="col-4">
            <button onClick={handleThumbUp}>Thumb Up</button>
          </li>
          <li className="col-4">
            <button onClick={handleThumbDown}>Thumb Down</button>
          </li>
        </ul>
      </div>
    </MemoContainer>
  );
};
