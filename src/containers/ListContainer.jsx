import React, { Component } from 'react';
import { fetchApi } from '../components/services/fetchApi';
import ListComponent from '../components/ListAndDetails/ListComponent';

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
      console.log(this.state.characters[0]?.image);
      if(this.state.loading) {
        return (<img
          // eslint-disable-next-line max-len
          src="https://icon-library.com/images/ajax-loading-icon/ajax-loading-icon-2.jpg"
          alt="loading spinner"
        />);
      }
      return (
        <ListComponent characters={this.state.characters} />
      );
    }
}
