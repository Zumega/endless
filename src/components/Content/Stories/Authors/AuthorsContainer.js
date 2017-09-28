import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './Authors.css';
import AuthorInitial from './AuthorInitial';
import AuthorByInitial from './AuthorByInitial';

class AuthorsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedInitial: null,
      authors: props.authors.letters,
      activeInitials: props.authors.active
    };

    this.buildList = this.buildList.bind(this);
    this.handleInitialClick = this.handleInitialClick.bind(this);
  }

  handleInitialClick (id) {
    this.setState(prevState => ({
      ...prevState,
      selectedInitial: id,
      allAuthors: null
    }))
  }

  buildList () {
    let counter = 26;
    let data = [];

    while (counter --) {
      const letter = String.fromCharCode(65 + counter);

      if (this.state.activeInitials.indexOf(letter) >= 0) {
        data.unshift((
          <li key={letter} onClick={() => (this.handleInitialClick(letter))}>{letter}</li>
        ));
      } else {
        data.unshift((
          <li key={letter}>-{letter}-</li>
        ));
      }
    }

    if (this.state.activeInitials.indexOf('NUMBER') >= 0) {
      data.unshift(<li key="NUMBER" onClick={() => (this.handleInitialClick('NUMBER'))}>#</li>);
    } else {
      data.unshift(<li key="NUMBER">-#-</li>);
    }

    return data;
  }

  getAuthors (initial) {
    if (this.state.authors) {
      return this.state.authors[initial];
    }
    return null;
  }

  render () {
    const {
      selectedInitial
    } = this.state;
    return (
      <div>
        <h2>Authors:</h2>
        <AuthorInitial buildList={this.buildList} />
        <div>
          {
            selectedInitial && <AuthorByInitial authors={this.getAuthors(selectedInitial)} initial={selectedInitial} />
          }
        </div>
      </div>
    );
  }
}

export default AuthorsContainer;