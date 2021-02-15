import React from 'react';
import { string, func } from 'prop-types';

export const Password = ({ password, handlePasswordChange }) => {
  return (
    <div>
      <input type="text" value={password} onChange={handlePasswordChange} placeholder="Password" />
      <input type="submit" value="Submit" />
    </div>
  );
};

Password.defaultProps = {
  password: ''
};

Password.propTypes = {
  password: string,
  handlePasswordChange: func.isRequired
};
