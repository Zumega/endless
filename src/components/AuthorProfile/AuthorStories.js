import React, {useState} from 'react';
import {hashCode} from "../Utility/Utilities";
import {EditBox} from "./EditBox";
import {useStore} from "../Utility/Hooks/useStore";
import {Actions} from "../../store/Actions";

export const AuthorStories = ({data, type}) => {
  const { openedClosed, editStory, dispatch } = useStore('AuthorStories');
// this is fucked what is what and how is this suppose to work?
//   const [isEdit, seIsEdit] = useState(false);
  const genreKeys = Object.keys(data);

  const handlEditClick = content => dispatch({
      type: Actions.EDIT_STORY,
      payload: content,
    });

  return  genreKeys.map(key => {
    const genre = data[key];

    return <div key={key} style={{height: openedClosed[type] ? 'auto' : '0', overflow: 'hidden'}}>
      <label>{key}</label>
      <ul>
        {
          genre.map(story => <li key={story.id}>
            {story.name}
            <div onClick={() => handlEditClick(story?.content?.join(' '))}>{editStory ? 'Close' : 'Edit'}</div>
            <div>
              {
                editStory ?
                  <EditBox />:
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