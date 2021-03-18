import React from 'react';
import {AuthorStories} from "./AuthorStories";

export const AuthorStoriesSections = ({stories}) => {
  const storyTypes = Object.keys(stories);

  return <section>
    {
      storyTypes?.map(type =>
        <React.Fragment key={type}>
          <h3>{type}</h3>
          <AuthorStories data={stories[type]} />
          <hr />
        </React.Fragment>
      )
    }
  </section>
};