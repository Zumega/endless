import React from 'react';
import { string, func, bool } from 'prop-types';

export const UserName = ({ userName, handleUserNameChange, showPassword }) => {
  return (
    <div>
      <input type="text" value={userName} onChange={handleUserNameChange} placeholder="Username" />
      {!showPassword && <input type="submit" value="Next" />}
    </div>
  );
};

UserName.defaultProps = {
  password: '',
  showPassword: false
};

UserName.propTypes = {
  password: string,
  handleUserNameChange: func.isRequired,
  showPassword: bool
};
