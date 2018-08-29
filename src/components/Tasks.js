import React from 'react';

let count = 0;

class Tasks extends React.Component {
  componentDidMount(){
    console.log('this.props in Tasks component: ',this.props)
  }

  render() {
    console.log(`Posts render ${++count}`);
    console.log('this.props.tasks',this.props.tasks)
    
    return (
      <div>
        <h3>Tasks</h3>
        <ul>
          {this.props.tasks.map(x =>
            <li key={x.id}>
              {`${x.title}`}
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default Tasks;