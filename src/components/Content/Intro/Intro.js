import React from 'react';
import PropTypes from 'prop-types';

const Intro = ({ data, bbc }) => {
  return (
    <div>
      {data.text.map((txt, key) => bbc(txt, key)) }
      <br/><br/><br/><br/>
      <p className="basic">{data.byLine}</p>
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