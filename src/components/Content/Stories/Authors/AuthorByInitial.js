import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { simpleString } from '../../../Utility/Utilities';

const AuthorByInitial = ({ authors, initial }) => {
  function setAuthors () {
    if (authors === null) {
      const text = (initial === 'NUMBER') ? 'a number' : `the letter ${initial}`;
      return (<li key={initial}>No authors starting with {text}</li>);
    }

    return authors.map(author => (
      <li key={author.guid}>
        <Link to={'./' + simpleString(author.name)}>{author.name}</Link>
      </li>
    ));
  }

  return (
    <ul>
      {setAuthors()}
    </ul>
  );
}

AuthorByInitial.propTypes = {
  authors: PropTypes.array,
  initial: PropTypes.string.isRequired
}

export default AuthorByInitial;