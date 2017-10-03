import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserName from './UserName';
import Password from './Password';

class LibraryCardContainer extends Component {
  constructor() {
    super();

    this.state = {
      userName: '',
      password: '',
      showPassword: false
    }

    this.submitLibraryCard = this.submitLibraryCard.bind(this);
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  submitLibraryCard (event) {
    event.preventDefault();

    if (!this.state.showPassword) {
      this.setState(prevState => ({
        ...prevState,
        showPassword: true
      }));

      return;
    }

    console.log(this.state.userName + ' ' + this.state.password);
  }

  handleUserNameChange(event) {
    this.setState({ userName: event.target.value});
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }


  render() {
    const {
      userName,
      password,
      showPassword
    } = this.state;

    return (
      <form onSubmit={this.submitLibraryCard}>
        <label>
          Library Card
        </label>
        {
          !showPassword && <UserName userName={userName} handleUserNameChange={this.handleUserNameChange} />
        }
        {
          userName && showPassword && <Password password={password} handlePasswordChange={this.handlePasswordChange} />
        }
      </form>
    );
  }
}

export default LibraryCardContainer;