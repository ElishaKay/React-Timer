import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from './store';
import Posts from './components/Posts';
import Counter from './components/Counter';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Reselect Redux</h1>
        <Posts />
        <Counter />

      </div>
    );
  }
}

export default () => <Provider store={store}><App /></Provider>;
