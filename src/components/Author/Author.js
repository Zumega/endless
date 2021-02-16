import React, { useEffect } from 'react';
import { string } from 'prop-types';
import './Author.scss';

import { AuthorProfile } from '../AuthorProfile/AuthorProfile';
import { StoryGroups } from '../StoryGroups/StoryGroups';
import { useStore } from '../Utility/Hooks/useStore';
import { MemoContainer } from '../Memo/MemoContainer';
import { useBaseStore } from '../Utility/Hooks/useBaseStore';
import { Actions } from '../../store/Actions';

export const Author = ({ authorId }) => {
  const { author, libraryCard, dispatch } = useStore('Author');
  const { authors } = useBaseStore('Author');
  const id = libraryCard || authorId;

  useEffect(() => {
    if (!author && id) {
      dispatch({ type: Actions.AUTHOR, payload: authors.find(a => a.authorId === id) });
    }
  }, [author, id, authors, dispatch]);

  return author ? (
    <MemoContainer data={[author]}>
      <h3>{author.name}</h3>
      <AuthorProfile />
      <hr />
      {
        // TODO use proper validation object in stead of 'libraryCard'
        libraryCard && (
          <>
            <StoryGroups stories={author.stories} />
            <hr />
          </>
        )
      }
    </MemoContainer>
  ) : (
    'Loading'
  );
};

Author.propType = {
  authorId: string.isRequired
};
