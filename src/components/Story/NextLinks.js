import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import { Link } from 'react-router-dom';

export const NextLinks = ({ links }) => {
  return (
    <ul className="row">
      {links.map((link, key) => (
        <li key={key} className="col-24">
          <Link to={'./' + link.id}>{link.text}</Link>
        </li>
      ))}
    </ul>
  );
};

NextLinks.propTypes = {
  links: arrayOf(
    shape({
      id: string.isRequired,
      text: string.isRequired
    })
  )
};
