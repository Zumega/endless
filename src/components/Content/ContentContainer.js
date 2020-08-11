import React from 'react';
import { Route, Redirect  } from 'react-router-dom';
import useStore from "../Utility/Hooks/useStore";

import './Content.scss';

import Author from './Aurthor/Author';
import Intro from './Intro/Intro';
import StoriesContainer from './Stories/StoriesContainer';
import Story from './Story/Story';
import LibraryCard from './LibraryCard/LibraryCard';

// import IndexesContainer from './Indexes/IndexesContainer';
// import TmpSubmit from './TmpSubmit/TmpSubmit';
// import ErrorHandling from '../Utility/Error/Error';

import getOr from 'lodash/fp/getOr';

const ContentContainer = () => {
  const {fullScreen} = useStore('ContentContainer');

  const handleDataReady = (dataId, props) => {
    switch (dataId) {
      case 'author':
        return <Author authorId={getOr(null, 'match.params.id', props)} />;
      case 'intro':
        return <Intro />;
      case 'stories':
        return <StoriesContainer />;
      case 'story':
        return <Story genreId={getOr(null, 'match.params.genre', props)} storyId={getOr(null, 'match.params.id', props)} />;
      case 'libraryCard':
        return <LibraryCard />;
        
      // case 'indexes':
      //   return <IndexesContainer genres={genres} handleGenre={() => console.log('things')} />;
      // case 'submit':
      //   return <TmpSubmit />;
      default:
      //   // TODO: make better loading message
        return <span>LOADING</span>;
    }
  };

  const setClassName = () => {
    return 'bodyContainer ' + (fullScreen ? 'col-24' : 'col-20') +  ' alpha omega';
  };

  return (
    <div className={setClassName()}>
      {
        // error && <ErrorHandling error={error} />
      }
      <section className="container">
        <Route exact={true} path="/" render={() => handleDataReady('intro')} />
        <Route exact={true} path="/stories" render={() => handleDataReady('stories')} />
        <Route exact={true} path="/indexes" render={() => handleDataReady('indexes')} />
        <Route exact={true} path="/submit" render={() => handleDataReady('submit')} />
        <Route exact={true} path="/library-card" render={() => handleDataReady('libraryCard')} />
        <Route exact={true} path="/author/:id" render={(props) => handleDataReady('author', props)} />
        <Route exact={true} path="/stories/:genre/:id" render={(props) => handleDataReady('story', props)} />
        <Route exact={true} path="/profile" render={(props) => handleDataReady('profile', props)} />
        <Redirect to={{ pathname: "/library-card", state: { from: '/profile' } }} />
        <Route exact={true} path="/profile/:userId" render={(props) => handleDataReady('profile', props)} />
      </section>
    </div>
  );
};

export default ContentContainer;