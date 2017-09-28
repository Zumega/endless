import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import { bcc } from '../Utility/Utilities';
import './Content.css';
import Intro from './Intro/Intro';
import AboutContainer from './About/AboutContainer';
import StoriesContainer from './Stories/StoriesContainer';

class ContentContainer extends Component {
  constructor() {
    super();

    this.state = {
      introData: null,
      aboutData: null,
      storyData: null
    }

    const requests = [
      axios.get('api/intro.json'),
      axios.get('api/intro.json')
    ]

    axios.all(requests)
      .then(axios.spread((intro, about) => {
        this.setState(prevState => (
          {
            ...prevState,
            introData: intro.data,
            aboutData: about.data
          }
        ))
      }))
      .catch(error => {
        console.log(error, 'needs universal error handling');
      });
    
    this.handleDataReady = this.handleDataReady.bind(this);
  }

  handleDataReady(dataId) {
    let template = <span>Bad dataId</span>;

    if (this.state[dataId]) {
      switch (dataId) {
        case 'introData':
          return <Intro data={this.state.introData} bbc={this.handleBBC} />;
        case 'aboutData':
          return <AboutContainer />;
        case 'storyData':
          return <StoriesContainer />;
        default:
          return template;
      }
    }

    // TODO: make better loading message
    return <span>LOADING</span>;
  }

  handleBBC (text) {
    return bcc(text);
  }

  render() {
    return (
      <div className="contentContainer left">
        <section>
          <Route exact={true} path="/" render={() => this.handleDataReady('introData')} />
          <Route exact={true} path="/about" render={() => this.handleDataReady('aboutData')} />
          <Route exact={true} path="/stories" render={() => this.handleDataReady('storyData')} />
        </section>
      </div>
    );
  }
}

ContentContainer.propType = {}

export default ContentContainer;