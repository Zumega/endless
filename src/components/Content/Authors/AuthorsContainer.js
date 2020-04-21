import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import './Authors.scss';
import AuthorInitial from './AuthorInitial';
import AuthorByInitial from './AuthorByInitial';

const AuthorsContainer = ({data}) => {
  const [selectedInitial, setSelectedInitial] = useState(null);
  // const [authors, setAuthors] = useState(data.letters);
  const authors = data.letters;
  // const [allAuthors, setAllAuthors] = useState(null);
  // const [activeInitials, setActiveInitials] = useState(data.active);
  const activeInitials = data.active;

  const handleInitialClick = id => {
    setSelectedInitial(id);
    // setAllAuthors(null);
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

  const getAuthors = initial => {
    if (authors) return authors[initial];

    return null;
  };

  return (
    <div className="row">
      <div className="container">
        <h2>Authors:</h2>
        <AuthorInitial buildList={buildList} />
        <div className="row">
          {
            selectedInitial && <AuthorByInitial authors={getAuthors(selectedInitial)} initial={selectedInitial} />
          }
        </div>
      </div>
    </div>
  );
};

export default AuthorsContainer;