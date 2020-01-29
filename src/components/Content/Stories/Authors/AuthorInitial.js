import React from 'react';
import PropTypes from 'prop-types';

const AuthorInitial = ({ buildList }) => {
  return (
    <ul id="initialList" className="menu">
      { buildList() }
    </ul>
  );
};

AuthorInitial.propTypes = {
  buildList: PropTypes.func.isRequired
};


export default AuthorInitial;