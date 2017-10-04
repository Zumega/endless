import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Author.css';

import Profile from './Profile/Profile';
import StoryGroups from './Stories/StoryGroups';

class AuthorContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      author: null
    }

    axios.get(`api/author/${props.match.params.id}.json`)
      .then(response => {
        this.setState({
          author: response.data
        })
      })
      .catch(error => {
        console.log(error, 'needs universal error handling');
      });
  }
  render() {
    const {
      author
    } = this.state;

    return (
      <div>
        {author && <h3>{author.name}</h3>}
        {author && <Profile author={author} />}
        <hr />
        {author && <StoryGroups stories={author.stories} />}
      </div>
    );
  }
}

AuthorContainer.propType = {
  match: PropTypes.object.isRequired
}

export default AuthorContainer;