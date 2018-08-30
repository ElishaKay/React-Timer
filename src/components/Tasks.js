import React from 'react';
import {createSelector} from 'reselect'
import {connect} from 'react-redux';

import Counter from './Counter';

let timesRendered=0;

class Tasks extends React.Component {

  render() {

    console.log('Tasks in tasks component: ',this.props.tasks)
    console.log(`Tasks render ${++timesRendered}`);
    return (
      <div>
        <h3>Tasks</h3>
        <ul>
          {this.props.tasks.map(x =>
            <li key={x.id}>
              {`${x.title} - ${x.user.first} ${x.user.last}`}
              <Counter task={x} />
            </li>
          )}
        </ul>
      </div>
    );
  }
}

const getListing = createSelector(
  state => state.tasksById,
  state => state.usersById,
  state => state.taskListing,
  (tasks, users, listing) => listing.map(id => {
    const task = tasks[id];
    return {...task, user: users[task.author]}
  })
);

const mapState = (state) => {
  return {tasks: getListing(state)};
};

export default connect(mapState)(Tasks);
