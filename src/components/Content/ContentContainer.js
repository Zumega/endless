import React from 'react';
import { Route  } from 'react-router-dom';
import useStore from "../Utility/Hooks/useStore";

import './Content.scss';

import Intro from './Intro/Intro';
import StoriesContainer from './Stories/StoriesContainer';
import Story from './Story/Story';
// import IndexesContainer from './Indexes/IndexesContainer';
// import AuthorContainer from './Aurthor/AuthorContainer';
// import LibraryCardContianer from './LibraryCard/LibraryCardContainer';
// import TmpSubmit from './TmpSubmit/TmpSubmit';
// import ErrorHandling from '../Utility/Error/Error';

import get from 'lodash/get';

const ContentContainer = () => {
  const {fullScreen} = useStore('ContentContainer');

  const handleDataReady = (dataId, props) => {
    switch (dataId) {
      case 'intro':
        return <Intro />;
      case 'stories':
        return <StoriesContainer />;
      case 'indexes':
        // return <IndexesContainer genres={genres} handleGenre={() => console.log('things')} />;
      case 'submit':
        // return <TmpSubmit />;
      case 'libraryCard':
        // return <LibraryCardContianer data={libraryCard} />;
      // case 'author':
      //   return <AuthorContainer {...props} />;
      case 'story':
        return <Story genreId={get(props, 'match.params.genre', null)} storyId={get(props, 'match.params.id', null)} />;
      default:
      //   // TODO: make better loading message
      //   return <span>LOADING</span>;
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
      </section>
    </div>
  );
};

export default ContentContainer;