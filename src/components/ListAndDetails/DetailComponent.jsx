/* eslint-disable max-len */
import React, { Component } from 'react';
import { fetchVillager } from '../services/fetchVillager';
import LoadingComponent from './LoadingComponent';

export default class DetailComponent extends Component {
  state = {
    character: {},
    loading: true
  }

  componentDidMount() {
    fetchVillager(location.pathname.split('/')[1]).then(character => this.setState({ character, loading: false }));
  }
  render() {
    const villager = this.state.character;
    if(this.state.loading) {
      return (<LoadingComponent />);
    }
    return (
      <div>
        <img src={villager.image} alt={villager.name} height={'400px'}/>
        <p>{villager.name}</p>
        <p>{villager.gender}</p>
        <p>{villager.quote}</p>
        <p>{villager.species}</p>
        <p>{villager.birthday}</p>
        <p>{villager.phrase}</p>
        <p>{villager.style}</p>
      </div>
    );
  }
}
