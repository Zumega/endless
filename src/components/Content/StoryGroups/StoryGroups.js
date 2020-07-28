import React  from 'react';
import PropTypes from 'prop-types';
import StoryGroup from './StoryGroup';

const StoryGroups = ({stories}) => {
  const genres = genres => (
    <ul>
      {
        Object.keys(genres).map(key => {
          const genre = genres[key];

          return genre.length ? (
              <li key={key}>
                <h5>{key}</h5>
                {genre.length > 0 && <StoryGroup stories={genre} />}
              </li>
            ) : null;
        })
      }
    </ul>
  );
  
  return (
    <ul>
    {
      Object.keys(stories).map(key => (
        <li key={key}>
          <h4>{key}</h4>
          {
            genres(stories[key])
          }
        </li>
      ))
    }
    </ul>);
};

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
};

export default StoryGroups;