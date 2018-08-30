import React from 'react';
import {connect} from 'react-redux';
import { increment } from "../actions";

class Counter extends React.Component {
  componentDidMount() {
    console.log('Counter Component rendered')
  }

  onIncrementClick() {
    setInterval(() => {
        this.props.increment(this.props.task);
      }, 1000);
  }
  
  render() {
    console.log('this.props.count in counter component:',this.props.count);
    return (
      <div>
        <button className="btn"
          onClick={this.onIncrementClick.bind(this)}
        >Start Counting</button>
        <h3>Count: </h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({count: state.count});

export default connect(mapStateToProps, { increment })(Counter);