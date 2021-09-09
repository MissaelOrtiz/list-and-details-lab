/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import ListItemComponent from './ListItemComponent';

const ListComponent = ({ characters }) => (
  <ul aria-label="characters" style={{
    display: 'flex',
    'flex-direction': 'row',
    width: '100%',
    'flex-wrap': 'wrap',
    'text-align': 'center',
    'align-content': 'center',
    'justify-content': 'center'
  }}>
    {characters.map((character) => (
      <li key={character.id} style={{ 
        'list-style-type': 'none',
        display: 'flex',
        'flex-direction': 'column',
        'justify-content': 'center',
        'align-items': 'center',
        'text-align': 'center',
        'margin': '20px',
      }}>
        <ListItemComponent name={character.name} idee={character.id} image={character.image}/>
      </li>
    ))}
  </ul>
);

ListComponent.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ListComponent;
