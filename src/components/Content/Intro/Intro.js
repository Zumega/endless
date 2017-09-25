import React from 'react';
import { Link } from 'react-router-dom';

const Intro = () => {
  // TODO: pass in this content from somewhere
  return (
    <div>
      <p>Have you ever read one of those choose your own adventure books? Well here is your chance to read and participate in the creation of the story.This site is dedicated to the creation and enjoyment of story telling.</p>
      <p>Please enjoy reading the fist couple of chapters of your favorite genre.We have many categories to choose from (most right now don't have anything to read since the site is new). Sign up to read more chapters and submit your own ideas. Membership is free you can sign up under {(
        <Link to={'./library-card'}>"Library Card"</Link>)
        }.</p>
      <br />
      <br />
      <div>
        Thanks: Endless Story Crew
      </div>
    </div>
  );
}

export default Intro;