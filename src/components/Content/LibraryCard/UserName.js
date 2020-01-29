import React  from 'react';
import PropTypes from 'prop-types';

const UserName = ({
  userName, 
  handleUserNameChange
}) => {
  return (
    <div>
      <input type="text" value={userName} onChange={handleUserNameChange} placeholder="Username" />
      <input type="submit" value="Next" />
    </div>
  );
};

UserName.propTypes = {
  password: PropTypes.string,
  handleUserNameChange: PropTypes.func.isRequired
};

export default UserName;