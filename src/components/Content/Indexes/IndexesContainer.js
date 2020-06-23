import React, { useContext }  from 'react';
import {Context} from '../../../store/Store';

import GenresContainer from '../Genres/GenresContainer';
import Stories from "../Stories/Stories";

const IndexesContainer = () => {
  return <>
    <GenresContainer />
    <Stories />
  </>;
};

export default IndexesContainer;