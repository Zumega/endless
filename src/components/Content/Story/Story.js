import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Content from './Content';
import NextLinks from './NextLinks';
import {guid} from "../../Utility/Utilities";


const Story = ({storyId}) => {
  const [story, setStory] = useState(null);

  useEffect(() => {
    if (storyId) {
      console.log(guid());
      fetch(`/api/story_${storyId}.json`)
        .then(response => response.json())
        .then(setStory);
    }
  }, [storyId]);

  return (
    <>
      {
        story && <h4 className="row">{story.title}</h4>
      }
      <div className="row">
        {/* Options for reader and editor */}
        <ul className="menu">
          <li className="col-4">Edit</li>
          <li className="col-4">Flag</li>
          <li className="col-4">Publish</li>
          <li className="col-4">Thumb Up</li>
          <li className="col-4">Thumb Down</li>
        </ul>
      </div>
      {
        story && (story.content.length >= 1) && <Content text={story.content} />
      }
      {
        story && <div className="row"><Link to={'./' + story.meta.parent.id}>Back</Link></div>
      }
      {
        story && <NextLinks links={story.meta.children} />
      }
    </>
  );
};

export default Story;