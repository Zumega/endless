import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import UserName from './UserName';
import Password from './Password';

const LibraryCardContainer = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const submitLibraryCard = event => {
    event.preventDefault();

    if (!showPassword) {
      setShowPassword(true);

      return;
    }

    console.log(userName + ' ' + password);
  };

  const handleUserNameChange = event => {
    setUserName(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  return (
    <form onSubmit={submitLibraryCard}>
      <label>
        Library Card
      </label>
      {
        !showPassword && <UserName userName={userName} handleUserNameChange={handleUserNameChange} />
      }
      {
        userName && showPassword && <Password password={password} handlePasswordChange={handlePasswordChange} />
      }
    </form>
  );
};

export default LibraryCardContainer;