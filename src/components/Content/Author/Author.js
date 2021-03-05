import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import './Author.scss';

import AurthorProfile from '../AuthorProfile/AuthorProfile';
import StoryGroups from '../StoryGroups/StoryGroups';

import useStore from "../../Utility/Hooks/useStore";
import MemoContainer from "../../MemoContainer";
import useBaseStore from "../../Utility/Hooks/useBaseStore";
import Actions from "../../../store/Actions";

const Author = ({authorId}) => {
  const {author, libraryCard, dispatch} = useStore('Author');
  const {authors} = useBaseStore('Author');
  const id = libraryCard || authorId;

  useEffect(() => {
    if(!author && id) {
      console.log(1);
      dispatch({type:Actions.AUTHOR, payload: authors.find(a => a.authorId === id)})
    }
  }, [author, id, authors, dispatch]);

  return author ? (
    <MemoContainer data={[author]}>
      <h3>{author.name}</h3>
      <AurthorProfile />
      <hr />
      {
        // TODO use porper validation object in stead of 'libraryCard'
        libraryCard && (
          <>
            <StoryGroups stories={author.stories} />
            <hr />
          </>
        )
      }
    </MemoContainer>) : 'loading';
};

Author.propType = {
  authorId: PropTypes.string.isRequired
};

export default Author;