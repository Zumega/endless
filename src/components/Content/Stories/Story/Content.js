import React from 'react';
import PropTypes from 'prop-types';

const Content = ({text}) => {
  return (
    <div>
      {
        text.map((text, key) => (
          <p key={key}>
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