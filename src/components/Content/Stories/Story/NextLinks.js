import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NextLinks = ({ links }) => {
  return (
    <ul>
      {
        links.map((link, key) => (
          <li key={key}>
            <Link to={'./' + link.id}>{link.text}</Link>
          </li>
        ))
      }
    </ul>
  );
};

NextLinks.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }))
};

export default NextLinks;