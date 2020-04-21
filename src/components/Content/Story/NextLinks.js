import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NextLinks = ({ links }) => {
  return (
    <ul className="row">
      {
        links.map((link, key) => (
          <li key={key} className="col-24">
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