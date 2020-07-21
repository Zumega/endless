import React, { useEffect } from 'react';
import Actions from '../../../store/Actions';
import useStore from "../../Utility/Hooks/useStore";

import { Link } from 'react-router-dom';
import {guid} from "../../Utility/Utilities";

import Content from './Content';
import NextLinks from './NextLinks';
import MemoContainer from '../../MemoContainer';
import StoryActions from "../StoryActions/StoryActions";

import DATA from '../../../data/api/fantasy';

const Story = ({genreId, storyId}) => {
  const {story, dispatch} = useStore('Story');

  useEffect(() => {
    if (storyId) {
      // fetch(`/api/${genreId}/{storyId}.json`)
      //   .then(response => response.json())
      //   .then(response => {
      //     dispatch({type: Actions.STORY, payload: response})
      //   });

      dispatch({type: Actions.STORY, payload: DATA.find(story => story.id === storyId)});
    }
  }, [storyId]);

  return (
    <MemoContainer data={[story]}>
      <>
        {
          story && <h2 className="row">{story.title}</h2>
        }
        <StoryActions />
        {
          story &&
          (story.content.length >= 1) &&
          <>
            <Content text={story.content} />
            {
              story.meta.parent.id &&
              <div className="row"><Link to={'./' + story.meta.parent.id}>Back</Link></div>
            }
            <NextLinks links={story.meta.children} />
          </>
        }
      </>
    </MemoContainer>
  );
};

export default Story;