import React from 'react';
import { useBaseStore } from '../Utility/Hooks/useBaseStore';
import { useStore } from '../Utility/Hooks/useStore';
import { MemoContainer } from '../MemoContainer';
import { Actions } from '../../store/Actions';

export const AuthorInitial = () => {
  const { authorsInitials } = useBaseStore('AuthorInitial');
  const { dispatch } = useStore('AuthorInitial');

  const activeInitials = authorsInitials.active;

  const handleInitialClick = id => {
    dispatch({ type: Actions.INITIAL, payload: id });
  };

  const buildList = () => {
    const data = [];
    const classname = 'col-8';
    let counter = 26;

    while (counter--) {
      const letter = String.fromCharCode(65 + counter);

      if (activeInitials.indexOf(letter) >= 0) {
        data.unshift(
          <li key={letter} className={classname} onClick={() => handleInitialClick(letter)}>
            {letter}
          </li>
        );
      } else {
        data.unshift(
          <li key={letter} className={classname}>
            -{letter}-
          </li>
        );
      }
    }

    if (activeInitials.indexOf('NUMBER') >= 0) {
      data.unshift(
        <li key="NUMBER" className={classname} onClick={() => handleInitialClick('NUMBER')}>
          #
        </li>
      );
    } else {
      data.unshift(
        <li key="NUMBER" className={classname}>
          -#-
        </li>
      );
    }

    return data;
  };
  return (
    <MemoContainer data={[authorsInitials]}>
      <div data-id="AuthorInitial" className="row">
        <ul className="menu">{buildList()}</ul>
      </div>
    </MemoContainer>
  );
};
