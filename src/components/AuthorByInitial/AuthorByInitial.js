import React from 'react';
import { Link } from 'react-router-dom';
import { simpleString } from '../Utility/Utilities';
import { MemoContainer } from '../MemoContainer';
import { useBaseStore } from '../Utility/Hooks/useBaseStore';
import { useStore } from '../Utility/Hooks/useStore';

export const AuthorByInitial = () => {
  const { authorsInitials } = useBaseStore('AuthorByInitial');
  const { selectedInitial } = useStore('AuthorByInitial');

  const setAuthors = () => {
    const currentLetter = authorsInitials?.letters || {};
    const authorsPerLetter = currentLetter[selectedInitial];

    if (Array.isArray(authorsPerLetter)) {
      return authorsPerLetter.map(author => (
        <li key={author.guid} className="col-8">
          <Link to={'./author/' + simpleString(author.name)}>{author.name}</Link>
        </li>
      ));
    }

    const text = selectedInitial === 'NUMBER' ? 'a number' : `the letter ${selectedInitial}`;

    return (
      <li key={selectedInitial} className="col-8">
        No authors starting with {text}
      </li>
    );
  };

  return (
    <MemoContainer data={[authorsInitials, selectedInitial]}>
      <ul data-id="AuthorByInitial" className="authorInitials menu row potato">
        {setAuthors()}
      </ul>
    </MemoContainer>
  );
};
