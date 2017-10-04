import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StoryGroup from './StoryGroup';

class StoryGroups extends Component {
  constructor(props) {
    super(props);

    this.groups = this.groups.bind(this);
    this.genres = this.genres.bind(this);
  }

  genres(genres) {
    let data = [];

    for (let key in genres) {
      if (genres.hasOwnProperty(key)) {
        if (genres[key].length) {
          data.push((
            <li key={key}>
              <h5>{key}</h5>
              {genres[key].length > 0 && <StoryGroup stories={genres[key]} />}
            </li>
          ));
        }
      }
    }

    return data;
  }
  
  groups(stories) {
    let data = [];

    for (let key in stories) {
      if (stories.hasOwnProperty(key)) {
        data.push(
          <li key={key}>
            <h4>{key}</h4> 
            <ul>
              {
                this.genres(stories[key])
              }
            </ul>
          </li>
        )
      }
    }  

    return (
      <ul>
        {data}
      </ul> 
    );
  }

  render() {
    const {
      stories
    } = this.props;

    return this.groups(stories);
  }
}

StoryGroups.propType = {
  stories: PropTypes.shape({
    inEdit: PropTypes.array.isRequired,
    inProgress: PropTypes.array.isRequired,
    live: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
      })
    ).isRequired
  }).isRequired
}

export default StoryGroups;