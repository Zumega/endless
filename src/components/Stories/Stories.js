import React from 'react';
import { Link } from 'react-router-dom';
import { simpleString } from '../Utility/Utilities';
import { MemoContainer } from '../Memo/MemoContainer';
import { useBaseStore } from '../Utility/Hooks/useBaseStore';
import { useStore } from '../Utility/Hooks/useStore';

export const Stories = () => {
  const { stories } = useBaseStore('Stories');
  const { genre } = useStore('Stories');
  const simpleGenre = simpleString(genre);
  const genreStories = stories[simpleGenre];

  return (
    <MemoContainer data={[stories, genre]}>
      {genreStories && genreStories.length > 0 ? (
        <div data-id="Stories" className="col-14">
          <h2>{genre} Stories:</h2>
          <ul>
            {genreStories.map(story => (
              <li key={story.id}>
                <Link to={`/stories/${simpleGenre}/${story.id}`}>{story.name}</Link>
                <p>{story.blurb}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <section>No {genre} stories yet.</section>
      )}
    </MemoContainer>
  );
};
