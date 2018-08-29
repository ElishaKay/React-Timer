import React from 'react';
import {connect} from 'react-redux';
import { increment } from "../actions";

class Counter extends React.Component {
  componentDidMount() {
    console.log('Counter Component rerendered')
    setInterval(() => {
      this.props.increment(this.props.task.id);
    }, 1000);
  }
  
  render() {
    // console.log('this.props in counter component:',this.props);

    return (
      <div>
        <h3>Count: {this.props.count}</h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({count: state.count});

export default connect(mapStateToProps, { increment })(Counter);