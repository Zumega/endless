import React from 'react';
import { shape, array, arrayOf, string } from 'prop-types';
import { StoryGroup } from './StoryGroup';

export const StoryGroups = ({ stories }) => {
  const genres = genres => (
    <ul>
      {Object.keys(genres).map(key => {
        const genre = genres[key];

        return genre.length ? (
          <li key={key}>
            <h5>{key}</h5>
            {genre.length > 0 && <StoryGroup stories={genre} />}
          </li>
        ) : null;
      })}
    </ul>
  );

  return (
    <ul>
      {Object.keys(stories).map(key => (
        <li key={key}>
          <h4>{key}</h4>
          {genres(stories[key])}
        </li>
      ))}
    </ul>
  );
};

StoryGroups.propType = {
  stories: shape({
    inEdit: array.isRequired,
    inProgress: array.isRequired,
    live: arrayOf(
      shape({
        id: string.isRequired,
        name: string.isRequired
      })
    ).isRequired
  }).isRequired
};
