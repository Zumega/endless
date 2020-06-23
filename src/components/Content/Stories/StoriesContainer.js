import React from 'react';
import './Stories.scss';

import AuthorsContainer from '../Authors/AuthorsContainer';
import IndexesContainer from "../Indexes/IndexesContainer";

const StoriesContainer = () => {
  return (
    <>
      <div className="row">
        <div className="container">
          <div className="row">
            <IndexesContainer />
          </div>
        </div>
      </div>
      <AuthorsContainer />
    </>
  );
};

export default StoriesContainer;