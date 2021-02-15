import React from 'react';
import './Stories.scss';

import { Authors } from '../Authors/Authors';
import { Indexes } from '../Indexes/Indexes';

export const StoriesContainer = () => {
  return (
    <>
      <div className="row">
        <div className="container">
          <div className="row">
            <Indexes />
          </div>
        </div>
      </div>
      <Authors />
    </>
  );
};
