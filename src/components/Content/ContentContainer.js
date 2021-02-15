import React from 'react';
import './Content.scss';
import { Route, Redirect } from 'react-router-dom';
import { useStore } from '../Utility/Hooks/useStore';
import { Author } from '../Author/Author';
import { Intro } from '../Intro/Intro';
import { StoriesContainer } from '../Stories/StoriesContainer';
import { Story } from '../Story/Story';
import { StoryEdit } from '../StoryEdit/StoryEdit';
import { LibraryCard } from '../LibraryCard/LibraryCard';

export const ContentContainer = () => {
  const { fullScreen } = useStore('ContentContainer');

  const handleDataReady = (dataId, props = {}) => {
    const { match } = props;

    switch (dataId) {
      case 'author':
        return <Author authorId={match?.params?.id || null} />;
      case 'intro':
        return <Intro />;
      case 'stories':
        return <StoriesContainer />;
      case 'story':
        return <Story genreId={match?.params?.genre || null} storyId={match?.params?.id || null} />;
      case 'storyEdit':
        return <StoryEdit id={match?.params?.id || null} storyId={match?.params?.storyId || null} />;
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
    return `bodyContainer alpha omega ${fullScreen ? 'col-24' : 'col-20'}`;
  };

  return (
    <div className={setClassName()}>
      {
        // error && <ErrorHandling error={error} />
      }
      <section className="container">
        <Route exact={true} path="/" render={() => handleDataReady('intro')} />
        <Route exact={true} path="/stories" render={() => handleDataReady('stories')} />
        <Route exact={true} path="/stories/:genre/:id" render={props => handleDataReady('story', props)} />
        <Route exact={true} path="/indexes" render={() => handleDataReady('indexes')} />
        <Route exact={true} path="/submit" render={() => handleDataReady('submit')} />
        <Route exact={true} path="/library-card" render={() => handleDataReady('libraryCard')} />
        <Route exact={true} path="/author/:id" render={props => handleDataReady('author', props)} />
        <Route exact={true} path="/author/:id/edit/:storyId" render={props => handleDataReady('storyEdit', props)} />

        <Redirect to={{ pathname: '/stories', state: { from: '/stories/:genre' } }} />

        {/*<Route exact={true} path="/profile" render={(props) => handleDataReady('profile', props)} />*/}
        {/*<Redirect to={{ pathname: "/library-card", state: { from: '/profile' } }} />*/}
        {/*<Route exact={true} path="/profile/:userId" render={(props) => handleDataReady('author', props)} />*/}
      </section>
    </div>
  );
};
