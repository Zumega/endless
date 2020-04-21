import React from 'react';
import PropTypes from 'prop-types';

const AuthorInitial = ({ buildList }) => {
  return (
    <div className="row">
      <ul id="initialList" className="menu">
        { buildList() }
      </ul>
    </div>
  );
};

AuthorInitial.propTypes = {
  buildList: PropTypes.func.isRequired
};


export default AuthorInitial;