import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Body from './components/new_users';
import Head from './components/Head'


class App extends Component {
  render() {
    return (
      <div>
        <Head/>
        <Body/>
      </div>
    );
  }
}

export default App;
