import React from 'react';
import './Error.scss';

const ErrorHandling = ({error}) => {
  console.log(error);
  return (
    <div>
      {error}
    </div>
  );
};

export default ErrorHandling;