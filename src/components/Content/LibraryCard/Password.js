import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Password = ({
  password,
  handlePasswordChange
}) => {
  return (
    <div>
      <input type="text" value={password} onChange={handlePasswordChange} placeholder="Password" />
      <input type="submit" value="Submit" />
    </div>
  );
}

Password.propTypes = {
  password: PropTypes.string,
  handlePasswordChange: PropTypes.func.isRequired
}

export default Password;