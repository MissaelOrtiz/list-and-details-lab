/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import ListItemComponent from './ListItemComponent';

const ListComponent = ({ characters }) => (
  <ul>
    {characters.map((character) => (
      <li key={character.id}>
        <ListItemComponent name={character.name} gender={character.gender} quote={character.quote} species={character.species} birthday={character.birthday} phrase={character.phrase} style={character.style} image={character.image}/>
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
      gender: PropTypes.string.isRequired,
      quote: PropTypes.string.isRequired,
      species: PropTypes.string.isRequired,
      birthday: PropTypes.string.isRequired,
      phrase: PropTypes.string.isRequired,
      style: PropTypes.string.isRequired
    })
  ).isRequired,
};

export default ListComponent;
