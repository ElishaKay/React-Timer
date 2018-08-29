import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTasks } from "../actions";

import Tasks from './Tasks';
import TasksNew from './NewTask';



class TasksIndex extends Component {
  componentDidMount(){
    console.log('componentDidMount function in TasksIndex:',this.props.fetchTasks())
  }

  render() {
    return (
      <div>
        <h1>Reselect Redux</h1>
        <TasksNew />
        <Tasks />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { tasks: state.tasks };
}

export default connect(mapStateToProps, { fetchTasks })(TasksIndex);