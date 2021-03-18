import React from 'react';
import {hashCode} from "../Utility/Utilities";

export const AuthorStories = ({data}) => {
  const genreKeys = Object.keys(data);

  return  genreKeys.map(key => {
    const genre = data[key];

    return <div key={key}>
      <label>{key}</label>
      <ul>
        {
          genre.map(story => <li key={story.id}>
            {story.name}
            <div>
              {
                story?.content?.length > 0 &&
                story.content.map(content => <p key={hashCode(content)}>{content}</p>)
              }
            </div>
          </li>)
        }
      </ul>
    </div>
  })
};