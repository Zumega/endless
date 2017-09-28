import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Intro = ({ data, bbc }) => {
  return (
    <div>
      { data.text.map(bbc) }
      <br/><br/><br/><br/>
      <p>{data.byLine}</p>
    </div>
  );
}

Intro.propTypes = {
  data: PropTypes.shape({
    text: PropTypes.array.isRequired,
    byLine: PropTypes.string
  }).isRequired,
  bbc: PropTypes.func.isRequired
}

export default Intro;