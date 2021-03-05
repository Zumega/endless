import React from 'react';
import { Link } from 'react-router-dom';
import { simpleString } from '../../Utility/Utilities';
import MemoContainer from "../../MemoContainer";
import useBaseStore from "../../Utility/Hooks/useBaseStore";
import useStore from "../../Utility/Hooks/useStore";
import getOr from 'lodash/fp/getOr';

const AuthorByInitial = () => {
  const {authorsInitials} = useBaseStore('AuthorByInitial');
  const {selectedInitial} = useStore('AuthorByInitial');

  const setAuthors = () => {
    const currentLetter = getOr({}, 'letters', authorsInitials);
    const authorsPerLetter = currentLetter[selectedInitial];

    console.log(currentLetter, authorsPerLetter);

    if(Array.isArray(authorsPerLetter)) {
      return authorsPerLetter.map(author => (
        <li key={author.guid} className="col-8">
          <Link to={'./author/' + simpleString(author.name)}>{author.name}</Link>
        </li>
      ));
    }

    const text = (selectedInitial === 'NUMBER') ? 'a number' : `the letter ${selectedInitial}`;
    return (<li key={selectedInitial} className="col-8">No authors starting with {text}</li>);
  };

  return (
    <MemoContainer data={[authorsInitials, selectedInitial]}>
      <ul className="authorInitials menu row potato">
        {setAuthors()}
      </ul>
    </MemoContainer>
  );
};

export default AuthorByInitial;