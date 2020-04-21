import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Author.scss';

import AurthorProfile from '../AurthorProfile/AurthorProfile';
import StoryGroups from '../AurthorStories/StoryGroups';

const AuthorContainer = (props) => {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    axios.get(`api/author/${props.match.params.id}.json`)
      .then(response => {
        setAuthor(response.data);
      })
      .catch(error => {
        console.log(error, 'needs universal error handling');
      });
  });

  return author && (<>
    <h3>{author.name}</h3>
    <AurthorProfile author={author} />
    <hr />
    <StoryGroups stories={author.stories} />
  </>);
};

AuthorContainer.propType = {
  match: PropTypes.object.isRequired
};

export default AuthorContainer;