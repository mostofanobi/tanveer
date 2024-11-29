import React from 'react';

const RoundedCorner = ({ className }) => {
  return (
    <svg
      className={className}
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      x='0'
      y='0'
      viewBox='0 0 100 100'
      xmlSpace='preserve'
    >
      <path d='M51.9 0v1.9c-27.6 0-50 22.4-50 50H0V0h51.9z'></path>
    </svg>
  );
};

export default RoundedCorner;
