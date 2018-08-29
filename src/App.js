import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from './store';
import Posts from './components/Posts';
import PostsByUser from './components/PostsByUser';
import Counter from './components/Counter';

const initial = store.getState();

class App extends Component {
  render() {
    return (
      <div>
        <h1>Reselect Redux</h1>
        <Posts />
        <Counter />

        <h2>User 1</h2>
        <PostsByUser user={'user-1'} />
        <h2>User 2</h2>
        <PostsByUser user={'user-2'} />

        <pre>{JSON.stringify(initial, null, 2)}</pre>
      </div>
    );
  }
}

export default () => <Provider store={store}><App /></Provider>;
