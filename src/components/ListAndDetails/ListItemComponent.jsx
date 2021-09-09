/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

const ListItemComponent = ({ name, image }) => (
  <button style={{
    'border': '10px double black',
    'width': '300px',
    'height': '50vh',
    'font-weight': 'bolder',
    'font-size': '2rem',
    'border-radius': '20px',
    'cursor': 'pointer' }}>
    <img src={image} alt={name} height={'200px'}/>
    <p>{name}</p>
  </button>
);

ListItemComponent.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string
};

export default ListItemComponent;
