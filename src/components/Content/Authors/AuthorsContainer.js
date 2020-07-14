import React, { useContext } from 'react';
import {Context} from "../../../store/Store";
import Actions from "../../../store/Actions";

import './Authors.scss';
import AuthorInitial from './AuthorInitial';
import AuthorByInitial from './AuthorByInitial';
import MemoContainer from '../../MemoContainer';

const AuthorsContainer = () => {
  const [{authors, selectedInitial}, dispatch] = useContext(Context);
  const activeInitials = authors.active;

  const handleInitialClick = id => {
    dispatch({type: Actions.INITIAL, payload: id})
  };

  const buildList = () => {
    const data = [];
    const classname = 'col-8';
    let counter = 26;

    while (counter --) {
      const letter = String.fromCharCode(65 + counter);

      if (activeInitials.indexOf(letter) >= 0) {
        data.unshift((
          <li key={letter} className={classname} onClick={() => (handleInitialClick(letter))}>{letter}</li>
        ));
      } else {
        data.unshift((
          <li key={letter} className={classname}>-{letter}-</li>
        ));
      }
    }

    if (activeInitials.indexOf('NUMBER') >= 0) {
      data.unshift(<li key="NUMBER" className={classname} onClick={() => (handleInitialClick('NUMBER'))}>#</li>);
    } else {
      data.unshift(<li key="NUMBER" className={classname}>-#-</li>);
    }

    return data;
  };

  return (
    <MemoContainer data={[authors, selectedInitial]}>
      <div className="row">
        <div className="container">
          <h2>Authors:</h2>
          <AuthorInitial buildList={buildList} />
          <div className="row">
            {
              selectedInitial && <AuthorByInitial />
            }
          </div>
        </div>
      </div>
    </MemoContainer>
  );
};

export default AuthorsContainer;