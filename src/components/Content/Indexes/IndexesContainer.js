import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class IndexesContainer extends Component {

  render() {
    return <GenresContainer genres={genres} handleGenre={this.handleGenre} />;
  }
}

IndexesContainer.propTypes = {}

export default IndexesContainer;