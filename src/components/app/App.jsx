import React from 'react';
import ListContainer from '../../containers/ListContainer';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import DetailComponent from '../ListAndDetails/DetailComponent';

export default function App() {
  // return <ListContainer />;
  return (
    <Router>
      <header>
        <nav>
          <Link to="/"> Home </Link>
        </nav>
      </header>
      <Switch>
        <Route path="/:id">
          <DetailComponent />
        </Route>
        <Route path="/">
          <ListContainer />
        </Route>
      </Switch>
    </Router>
  );
}
