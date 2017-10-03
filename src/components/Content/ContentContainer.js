import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Route  } from 'react-router-dom';
import { bcc } from '../Utility/Utilities';
import './Content.css';
import ErrorHandling from '../Utility/Error/Error';
import Intro from './Intro/Intro';
import AboutContainer from './About/AboutContainer';
import StoriesContainer from './Stories/StoriesContainer';
import AuthorContainer from './Aurthor/AuthorContainer';
import LibraryCardContianer from './LibraryCard/LibraryCardContainer';

class ContentContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      introData: null,
      aboutData: null,
      genresData: null,
      storyData: null,
      authorsData: null,
      libraryCardData: null
    }

    const requests = [
      axios.get('api/intro.json'),
      axios.get('api/intro.json'),
      axios.get('api/genres.json'),
      axios.get('api/stories.json'),
      axios.get('api/authors.json'),
      axios.get('api/libraryCard.json')
    ]

    axios.all(requests)
      .then(axios.spread((
        intro, 
        about, 
        genres, 
        story, 
        authors,
        libraryCard
      ) => {
        this.setState(prevState => (
          {
            ...prevState,
            introData: intro.data,
            aboutData: about.data,
            genresData: genres.data,
            storyData: story.data,
            authorsData: authors.data,
            libraryCardData: libraryCard.data
          }
        ))
      }));
    
    this.handleDataReady = this.handleDataReady.bind(this);
  }

  handleDataReady(dataId, props = null) {
    let template = <span>Bad dataId</span>;

    if (this.state[`${dataId}Data`]) {
      switch (dataId) {
        case 'intro':
          return <Intro data={this.state.introData} bbc={this.handleBBC} />;
        case 'about':
          return <AboutContainer />;
        case 'story':
          return <StoriesContainer genres={this.state.genresData} stories={this.state.storyData} authorsData={this.state.authorsData} />;
        case 'submit':
          return <div>SUBMIT</div>;
        case 'libraryCard':
          return <LibraryCardContianer />;
        default:
          return template;
      }
    }

    switch (dataId) {
      case 'author':
        return <AuthorContainer {...props} />;
      default:
        // TODO: make better loading message
        return <span>LOADING</span>;
    }
  }

  handleBBC(text, key) {
    return bcc(text, key);
  }

  render() {
    return (
      <div className="contentContainer left">
        {
          this.props.error && <ErrorHandling error={this.props.error} />
        }
        <section>
          <Route exact={true} path="/" render={() => this.handleDataReady('intro')} />
          <Route exact={true} path="/about" render={() => this.handleDataReady('about')} />
          <Route exact={true} path="/stories" render={() => this.handleDataReady('story')} />
          <Route exact={true} path="/submit" render={() => this.handleDataReady('submit')} />
          <Route exact={true} path="/library-card" render={() => this.handleDataReady('libraryCard')} />

          <Route exact={true} path="/author/:id" render={(props) => this.handleDataReady('author', props)} />
        </section>
      </div>
    );
  }
}

ContentContainer.propType = {
  error: PropTypes.object.isRequired
}

export default ContentContainer;