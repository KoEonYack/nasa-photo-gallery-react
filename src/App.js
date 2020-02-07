import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
//import Users from './components/Users';
import Users from './components/new_users';
import Search from './components/Search'
import Body from './components/Body'


class App extends Component {
  render() {
    return (
      <div>
        <Search/>
        <Body/>
        <Users/>
      </div>
    );
  }
}

export default App;
