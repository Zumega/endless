import React from 'react';
import { arrayOf, string } from 'prop-types';

export const Content = ({ text }) => {
  return (
    <div className="row">
      {text.map((text, key) => (
        <p key={key} className="col-24">
          {text}
        </p>
      ))}
    </div>
  );
};

Content.propTypes = {
  text: arrayOf(string.isRequired)
};
