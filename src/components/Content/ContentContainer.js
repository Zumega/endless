// import React, { useState, useEffect }  from 'react';
import React  from 'react';
import PropTypes from 'prop-types';
import { Route  } from 'react-router-dom';
import { bcc } from '../Utility/Utilities';
import './Content.scss';
import ErrorHandling from '../Utility/Error/Error';
import Intro from './Intro/Intro';
import IndexesContainer from './Indexes/IndexesContainer';
import StoriesContainer from './Stories/StoriesContainer';
// import AuthorContainer from './Aurthor/AuthorContainer';
// import LibraryCardContianer from './LibraryCard/LibraryCardContainer';
import Story from './Story/Story';

import intro from '../../data/intro';
import genres from '../../data/genres';
// import story from '../../data/story';
import stories from '../../data/stories';
import authors from '../../data/authors';
// import libraryCard from '../../data/libraryCard';

import get from 'lodash/get';


const ContentContainer = ({ error }) => {
  const handleBBC = (text, key) => {
    return bcc(text, key);
  };

  const handleDataReady = (dataId, props = null) => {
    switch (dataId) {
      case 'intro':
        return intro && <Intro data={intro} bbc={handleBBC} />;
      case 'stories':
        return <StoriesContainer genres={genres} stories={stories} authorsData={authors} />;
      case 'indexes':
        return <IndexesContainer genres={genres} handleGenre={() => console.log('things')} />;
      // case 'submit':
      //   return <div>SUBMIT</div>;
      case 'libraryCard':
        return <LibraryCardContianer data={libraryCard} />;
      // case 'author':
      //   return <AuthorContainer {...props} />;
      case 'story':
        return <Story storyId={get(props, 'match.params.id', null)} />;
      // default:
      //   // TODO: make better loading message
      //   return <span>LOADING</span>;
    }
  };

  return (
    <div className="bodyContainer col-20 alpha omega">
      {
        error && <ErrorHandling error={error} />
      }
      <section className="container">
        <Route exact={true} path="/" render={() => handleDataReady('intro')} />
        <Route exact={true} path="/stories" render={() => handleDataReady('stories')} />
        <Route exact={true} path="/indexes" render={() => handleDataReady('indexes')} />
        <Route exact={true} path="/submit" render={() => handleDataReady('submit')} />
        <Route exact={true} path="/library-card" render={() => handleDataReady('libraryCard')} />
        <Route exact={true} path="/author/:id" render={(props) => handleDataReady('author', props)} />
        <Route exact={true} path="/stories/:genre/:id" render={(props) => handleDataReady('story', props)} />
      </section>
    </div>
  );
};

ContentContainer.propType = {
  error: PropTypes.object.isRequired
};

export default ContentContainer;