/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

const ListItemComponent = ({ name, image, gender, quote, species, birthday, phrase, style }) => (
  <>
    <img src={image} alt={name} width={'300px'}/>
    <p>Name: {name}</p>
    <p>Gender: {gender}</p>
    <p>Quote: {quote}</p>
    <p>Species: {species}</p>
    <p>Birthday: {birthday}</p>
    <p>Phrase: {phrase}</p>
    <p>Style: {style}</p>
  </>
);

ListItemComponent.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  gender: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  birthday: PropTypes.string.isRequired,
  phrase: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired
};

export default ListItemComponent;
