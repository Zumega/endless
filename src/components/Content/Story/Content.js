import React from 'react';
import PropTypes from 'prop-types';

const Content = ({text}) => {
  return (
    <div className="row">
      {
        text.map((text, key) => (
          <p key={key} className="col-24">
            {text}
          </p>
        ))
      }
    </div>
  );
};

Content.propTypes = {
  text: PropTypes.arrayOf(PropTypes.string.isRequired)
};

export default Content;