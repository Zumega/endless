import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { simpleString } from '../../../Utility/Utilities';

const AuthorByInitial = ({ authors, initial }) => {
  const setAuthors = () => {
    if (authors === null) {
      const text = (initial === 'NUMBER') ? 'a number' : `the letter ${initial}`;
      return (<li key={initial} className="">No authors starting with {text}</li>);
    }

    return authors.map(author => (
      <li key={author.guid} className="">
        <Link to={'./author/' + simpleString(author.name)}>{author.name}</Link>
      </li>
    ));
  };

  return (
    <ul className="authorInitials menu">
      {setAuthors()}
    </ul>
  );
};

AuthorByInitial.propTypes = {
  authors: PropTypes.array,
  initial: PropTypes.string.isRequired
};

export default AuthorByInitial;