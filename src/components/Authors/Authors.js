import React from 'react';
import './Authors.scss';
import { AuthorInitial } from '../AuthorInitial/AuthorInitial';
import { AuthorByInitial } from '../AuthorByInitial/AuthorByInitial';
import { MemoContainer } from '../MemoContainer';
import { useStore } from '../Utility/Hooks/useStore';

export const Authors = () => {
  const { selectedInitial } = useStore('AuthorsContainer');

  return (
    <MemoContainer data={[selectedInitial]}>
      <div data-id="Authors" className="row">
        <div className="container">
          <h2>Authors:</h2>
          <AuthorInitial />
          <div className="row">{selectedInitial && <AuthorByInitial />}</div>
        </div>
      </div>
    </MemoContainer>
  );
};
