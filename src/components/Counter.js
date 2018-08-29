import React from 'react';
import {connect} from 'react-redux';

class Counter extends React.Component {
  componentDidMount() {
    console.log('Counter Component rerendered')
    setInterval(() => {
      this.props.increment();
    }, 1000);
  }
  
  render() {
    return (
      <div>
        <h3>Count: {this.props.count}</h3>
      </div>
    );
  }
}

const mapState = (state) => ({count: state.count});
const mapDispatch = {
  increment: () => ({type: 'INCREMENT', taskId: 1}),
};


export default connect(mapState, mapDispatch)(Counter);
