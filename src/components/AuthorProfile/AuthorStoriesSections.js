import React from 'react';
import {AuthorStories} from "./AuthorStories";
import {useStore} from "../Utility/Hooks/useStore";
import {Actions} from "../../store/Actions";

export const AuthorStoriesSections = ({stories}) => {
  const {openedClosed, dispatch} = useStore('AuthorStoriesSections');
  const storyTypes = Object.keys(stories);

  const handleIsOpenClick = type => {
    dispatch({
      type: Actions.OPENED_CLOSED,
      payload: {
        ...openedClosed,
        [type]: !openedClosed[type]
      }
    })
  }

  return <section>
    {
      storyTypes?.sort()?.map(type =>
        <div key={type}>
          <h3>{type}</h3>
          <div onClick={() => handleIsOpenClick(type)}>{openedClosed[type] ? 'Close' : 'Open'}</div>
          <hr />
          <AuthorStories data={stories[type]} type={type} />
        </div>
      )
    }
  </section>
};