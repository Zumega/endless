import React, { useEffect } from 'react';
import { Actions } from '../../store/Actions';
import { useStore } from '../Utility/Hooks/useStore';
import { Link } from 'react-router-dom';
import { Content } from './Content';
import { StoryActions } from '../StoryActions/StoryActions';
import { NextLinks } from './NextLinks';
import { MemoContainer } from '../Memo/MemoContainer';

import DATA from '../../data/api/fantasy.json';

// import {guid} from "../../Utility/Utilities";

export const Story = ({ genreId, storyId }) => {
  const { story, dispatch } = useStore('Story');

  useEffect(() => {
    if (storyId) {
      // fetch(`/api/${genreId}/{storyId}.json`)
      //   .then(response => response.json())
      //   .then(response => {
      //     dispatch({type: Actions.STORY, payload: response})
      //   });

      dispatch({ type: Actions.STORY, payload: DATA.find(story => story.id === storyId) });
    }
  }, [storyId, dispatch]);

  return (
    <MemoContainer data={[story]}>
      <>
        {story && <h2 className="row">{story.title}</h2>}
        <StoryActions />
        {story && story.content.length >= 1 && (
          <>
            <Content text={story.content} />
            {story.meta.parent.id && (
              <div className="row">
                <Link to={'./' + story.meta.parent.id}>Back</Link>
              </div>
            )}
            <NextLinks links={story.meta.children} />
          </>
        )}
      </>
    </MemoContainer>
  );
};
