import React from 'react';

let count = 0;

class Tasks extends React.Component {
  componentDidMount(){
    console.log('this.props in Tasks component: ',this.props)
  }

  render() {
    console.log(`Posts render ${++count}`);
    
    return (
      <div>
        <h3>Posts</h3>
        <ul>
          
        </ul>
      </div>
    );
  }
}

export default Tasks;