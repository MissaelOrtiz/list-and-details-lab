import React, { Component } from 'react';
import { fetchApi } from '../components/services/fetchApi';
import ListComponent from '../components/ListAndDetails/ListComponent';
import LoadingComponent from '../components/ListAndDetails/LoadingComponent';

export default class ListContainer extends Component {
    state = {
      characters: [],
      loading: true,
    }

    componentDidMount() {
      fetchApi().then(characters => { 
        this.setState({ characters, loading: false });
      });
    }

    render() {
      if(this.state.loading) {
        return (<LoadingComponent />);
      }
      return <ListComponent characters={this.state.characters} />;
    }
}
