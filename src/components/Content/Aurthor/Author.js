import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// import axios from 'axios';
import './Author.scss';

import AurthorProfile from '../AurthorProfile/AurthorProfile';
import StoryGroups from '../StoryGroups/StoryGroups';

import DATA from '../../../data/author/data';
import useStore from "../../Utility/Hooks/useStore";
import Actions from "../../../store/Actions";
import MemoContainer from "../../MemoContainer";

const Author = ({authorId}) => {
  console.log('Author', authorId);
  const {author, dispatch} = useStore('Author');

  useEffect(() => {
    // axios.get(`api/author/${authorId}.json`)
    //   .then(response => {
    //     setAuthor(response.data);
    //   })
    //   .catch(error => {
    //     console.log(error, 'needs universal error handling');
    //   });

    dispatch({
      type: Actions.AUTHOR, payload: DATA.find(data => data.authorId === authorId)
    })
  }, [authorId, dispatch]);

  return author ? (
    <MemoContainer data={[author]}>
      <h3>{author.name}</h3>
      <AurthorProfile />
      <hr />
      <StoryGroups stories={author.stories} />
      <hr />
      TODO: other authors?
    </MemoContainer>) : 'it is an error';
};

Author.propType = {
  authorId: PropTypes.string.isRequired
};

export default Author;