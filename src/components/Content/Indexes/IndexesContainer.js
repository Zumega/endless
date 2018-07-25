import React, { Component } from 'react';
import GenresContainer from '../Stories/Genres/GenresContainer';
// import PropTypes from 'prop-types';

class IndexesContainer extends Component {

  render() {
    // TODO needs a lot of work!
    return <GenresContainer genres={genres} handleGenre={this.handleGenre} />;
  }
}

IndexesContainer.propTypes = {}

export default IndexesContainer;