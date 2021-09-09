/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

const ListItemComponent = ({ name, image, idee }) => (
  <button onClick={() => {
    location.replace(`/${idee}`);
  }} style={{
    'width': '300px',
    'height': '50vh',
    'fontWeight': 'bolder',
    'fontSize': '2rem',
    'cursor': 'pointer' }}>
    <img src={image} alt={name} height={'200px'}/>
    <p>{name}</p>
  </button>
);

ListItemComponent.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  idee: PropTypes.string.isRequired
};

export default ListItemComponent;
