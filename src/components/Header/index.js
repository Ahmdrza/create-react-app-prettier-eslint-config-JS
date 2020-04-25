import React from 'react';
import PropTypes from 'prop-types';

export const Header = ({ name }) => {
  return (
    <>
      <h1>{name}</h1>
      <h2>{name}</h2>
      <h3>{name}</h3>
      <h4>{name}</h4>
      <h5>{name}</h5>
      <h6>{name}</h6>
    </>
  );
};

Header.defaultProps = {
  name: 'Ali',
};

Header.propTypes = {
  name: PropTypes.string,
};
