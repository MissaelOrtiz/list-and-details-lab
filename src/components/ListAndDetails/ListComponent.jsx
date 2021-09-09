/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import ListItemComponent from './ListItemComponent';

const ListComponent = ({ characters }) => (
  <ul role="list" aria-label="characters" style={{
    display: 'flex',
    'flexDirection': 'row',
    width: '100%',
    'flexWrap': 'wrap',
    'textAlign': 'center',
    'justifyContent': 'center'
  }}>
    {characters.map((character) => (
      <li key={character.id} style={{ 
        'listStyleType': 'none',
        display: 'flex',
        'flexDirection': 'column',
        'justifyContent': 'center',
        'alignItems': 'center',
        'textAlign': 'center',
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
