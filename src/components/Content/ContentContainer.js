import React, { useState, useEffect }  from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Route  } from 'react-router-dom';
import { bcc } from '../Utility/Utilities';
import './Content.scss';
import ErrorHandling from '../Utility/Error/Error';
import Intro from './Intro/Intro';
import IndexesContainer from './Indexes/IndexesContainer';
import StoriesContainer from './Stories/StoriesContainer';
import AuthorContainer from './Aurthor/AuthorContainer';
import LibraryCardContianer from './LibraryCard/LibraryCardContainer';

import Story from './Stories/Story/Story';

const ContentContainer = ({ error }) => {
  const [allLoaded, setAllLoaded] = useState(false);
  const [indexes, setIndexes] = useState(null);
  const [intro, setIntro] = useState(null);
  const [genres, setGenres] = useState(null);
  const [story, setStory] = useState(null);
  const [authors, setAuthors] = useState(null);
  const [libraryCard, setLibraryCard] = useState(null);
  const requests = [
    axios.get('api/intro.json'),
    axios.get('api/intro.json'),
    axios.get('api/genres.json'),
    axios.get('api/stories.json'),
    axios.get('api/authors.json'),
    axios.get('api/libraryCard.json')
  ];

  useEffect(() => {
    if (allLoaded) return;

    axios.all(requests)
      .then(axios.spread((
        intro,
        indexes,
        genres,
        story,
        authors,
        libraryCard
      ) => {
        setIndexes(indexes.data);
        setIntro(intro.data);
        setGenres(genres.data);
        setStory(story.data);
        setAuthors(authors.data);
        setLibraryCard(libraryCard.data);
        setAllLoaded(true);
      }));
  }, [allLoaded]);

  const handleDataReady = (dataId, props = null) => {
    switch (dataId) {
      case 'intro':
        return intro && <Intro data={intro} bbc={handleBBC} />;
      case 'indexes':
        return <IndexesContainer genres={genres} handleGenre={() => console.log('things')} />;
      case 'story':
        return <StoriesContainer genres={genres} stories={story} authorsData={authors} />;
      case 'submit':
        return <div>SUBMIT</div>;
      case 'libraryCard':
        return <LibraryCardContianer data={libraryCard} />;
      case 'author':
        return <AuthorContainer {...props} />;
      case 'stories':
        return <Story {...props} />;
      default:
        // TODO: make better loading message
        return <span>LOADING</span>;
    }
  };

  const handleBBC = (text, key) => {
    return bcc(text, key);
  };

  return (
    <div className="bodyContainer cell-20">
      {
        error && <ErrorHandling error={error} />
      }
      <section className="container row wrap">
        {
          allLoaded ?
            <>
              <Route exact={true} path="/" render={() => handleDataReady('intro')} />
              <Route exact={true} path="/stories" render={() => handleDataReady('story')} />
              <Route exact={true} path="/indexes" render={() => handleDataReady('indexes')} />
              <Route exact={true} path="/submit" render={() => handleDataReady('submit')} />
              <Route exact={true} path="/library-card" render={() => handleDataReady('libraryCard')} />
              <Route exact={true} path="/author/:id" render={(props) => handleDataReady('author', props)} />
              <Route exact={true} path="/stories/:genre/:id" render={(props) => handleDataReady('stories', props)} />
            </> :
            <p>LOADING</p>
        }
      </section>
    </div>
  );
};

ContentContainer.propType = {
  error: PropTypes.object.isRequired
};

export default ContentContainer;