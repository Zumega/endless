import React, { useState } from 'react';
import { UserName } from './UserName';
import { Password } from './Password';
import { useStore } from '../Utility/Hooks/useStore';
import { MemoContainer } from '../Memo/MemoContainer';
import { Actions } from '../../store/Actions';
import {useHistory} from "react-router-dom";

export const LibraryCard = () => {
  const history = useHistory();
  const { libraryCard, dispatch } = useStore('LibraryCard');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const submitLibraryCard = event => {
    event.preventDefault();

    if (!showPassword) {
      setShowPassword(true);

      return;
    }

    //TODO: validate user then trigger the below
    history.push(`/author/walker-texas-typer`)
    dispatch({ type: Actions.LIBRARY_CARD, payload: 'walker-texas-typer' });
  };

  const handleUserNameChange = event => {
    setUserName(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  return (
    <MemoContainer data={[libraryCard]}>
      <form data-id="LibraryCard" onSubmit={submitLibraryCard}>
        <label>Library Card</label>
        {<UserName userName={userName} showPassword={showPassword} handleUserNameChange={handleUserNameChange} />}
        {userName && showPassword && <Password password={password} handlePasswordChange={handlePasswordChange} />}
      </form>
    </MemoContainer>
  );
};
