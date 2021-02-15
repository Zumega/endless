import React from 'react';
import './Error.scss';

export const ErrorHandling = ({ error }) => {
  console.log(error);
  return <div>{error}</div>;
};
