import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Content from './Content';
import NextLinks from './NextLinks';

const Story = () => {
  const [story, setStory] = useState(null);

  useEffect(() => {
    // TODO: add in story id for real API
    axios.get('api/story.json')
      .then(response => {
        setStory(response.data);
      })
      .catch(error => {
        console.log(error, 'needs universal error handling');
      });
  });

  return (
    <div>
      {
        story && <h4>{story.title}</h4>
      }
      <div>
        {/* Options for reader and editor */}
        <ul>
          <li>Edit</li>
          <li>Flag</li>
          <li>Publish</li>
          <li>Thumb Up</li>
          <li>Thumb Down</li>
        </ul>
      </div>
      {
        story && (story.content.length >= 1) && <Content text={story.content} />
      }
      <div>
        {
          story && <Link to={'./' + story.meta.parent.id}>Back</Link>
        }
      </div>
      {
        story && <NextLinks links={story.meta.children} />
      }
    </div>
  );
};

export default Story;