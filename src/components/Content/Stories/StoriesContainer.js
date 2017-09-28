import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './Stories.css';
import GenresContainer from './Genres/GenresContainer';
import Stories from './Genres/Stories/Stories';
import AuthorsContainer from './Authors/AuthorsContainer';
import { simpleString } from '../../Utility/Utilities';

class StoriesContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      genres: props.genres,
      genre: null,
      stories: props.stories,
      story: null,
      authors: props.authorsData
    };

    this.handleGenre = this.handleGenre.bind(this);
  }

  handleGenre(genre) {
    this.setState(prevState => {
      return {
        ...prevState,
        genre: genre,
        story: this.state.stories[simpleString(genre)]
      }
    });
  }

  render() {
    const {
      genres,
      genre,
      story,
      authors
    } = this.state;

    return (
      <div>
        <div>
          <GenresContainer genres={genres} handleGenre={this.handleGenre} />
          {
            story && story.length > 0 && <Stories genre={genre} stories={story} />
          }
        </div>
        {
          <AuthorsContainer authors={authors} />
        }
      </div>
    );
  }
}

StoriesContainer.propTypes = {}

export default StoriesContainer;