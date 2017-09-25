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
      genre: null,
      stories: null
    };

    this.genres = [
      'Fantacy',
      'Sci-Fi',
      'Romance',
      'Horror', 
      'Fiction'
    ];

    // TODO: make this a service call
    this.STORIES = {
      fantacy: [
        {
          id: '654',
          genre: 'Fantacy',
          name: 'test',
          blurb: 'this is a test'
        }
      ],
      scifi: [],
      romance: [],
      horror: [],
      fiction: [
        {
          id: '987',
          genre: 'Fiction',
          name: 'test 23',
          blurb: 'this is a test'
        },
        {
          id: '6321',
          genre: 'Fiction',
          name: 'monkey',
          blurb: 'this is a test'
        }
      ]
    }

    this.handleGenre = this.handleGenre.bind(this);
  }

  handleGenre(genre) {
    this.setState(prevState => {
      return {
        ...prevState,
        genre: genre,
        stories: this.STORIES[simpleString(genre)]
      }
    });
  }

  render() {
    const {
      genre,
      stories
    } = this.state;

    return (
      <div>
        <div>
          <GenresContainer genres={this.genres} handleGenre={this.handleGenre} />
          {
            stories && stories.length > 0 && <Stories genre={genre} stories={stories} />
          }
        </div>
        <AuthorsContainer />
      </div>
    );
  }
}

StoriesContainer.propTypes = {}

export default StoriesContainer;