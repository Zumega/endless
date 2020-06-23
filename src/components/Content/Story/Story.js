import React, { useState, useEffect, useContext } from 'react';
import {Context} from '../../../store/Store';
import Actions from '../../../store/Actions';
// import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import Content from './Content';
import NextLinks from './NextLinks';
import {guid} from "../../Utility/Utilities";

const Story = ({storyId}) => {
  const [state, dispatch] = useContext(Context);
  const {
    story
  } = state;

  useEffect(() => {
    if (storyId) {
      console.log(guid());
      fetch(`/api/story_${storyId}.json`)
        .then(response => response.json())
        .then(response => {
          dispatch({type: Actions.STORY, payload: response})
        });
    }
  }, [storyId]);

  const handleFullScreen = () => {
    dispatch({type: Actions.FULL_SCREEN, payload: !state[Actions.FULL_SCREEN]});
  };

  return (
    <>
      {
        story && <h4 className="row">{story.title}</h4>
      }
      <div className="row">
        {/* Options for reader and editor */}
        <ul className="menu">
          <li className="col-4" onClick={handleFullScreen}>Full Screen</li>
          <li className="col-4">Flag</li>
          <li className="col-4">Thumb Up</li>
          <li className="col-4">Thumb Down</li>
        </ul>
      </div>
      {
        story &&
        (story.content.length >= 1) &&
        <>
          <Content text={story.content} />
          <div className="row"><Link to={'./' + story.meta.parent.id}>Back</Link></div>
          <NextLinks links={story.meta.children} />
        </>
      }
    </>
  );
};

export default Story;