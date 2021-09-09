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
      if(this.state.loading) {
        return (<div style={{
          'width': '100vw',
          'height': '100vh',
          'display': 'flex',
          'justifyContent': 'center',
          'alignItems': 'center'
        }}>
          <img
          // eslint-disable-next-line max-len
            src="https://icon-library.com/images/ajax-loading-icon/ajax-loading-icon-2.jpg"
            alt="loading spinner"
            style={{ height: '200px', width: '200px' }}
          />
        </div>);
      }
      return (
        <ListComponent characters={this.state.characters} />
      );
    }
}
