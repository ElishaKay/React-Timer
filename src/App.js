import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from './store';
import TasksIndex from './components/TasksIndex';

class App extends Component {
  render() {
    return (
      <div>
        <TasksIndex />
      </div>
    );
  }
}

export default () => <Provider store={store}><App /></Provider>;
