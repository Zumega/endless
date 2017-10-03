import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StoryGroup from './StoryGroup';

class StoryGroups extends Component {
  constructor(props) {
    super(props);

    this.groups = this.groups.bind(this);
  }
  
  groups(stories) {
    let data = [];

    for (let key in stories) {
      if (stories.hasOwnProperty(key)) {
        if (stories[key].length) {
          data.push((
            <li key={key}>
              <h4>{key}</h4>
              {stories[key].length > 0 && <StoryGroup stories={stories[key]} />}
            </li>
          ));
        }
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