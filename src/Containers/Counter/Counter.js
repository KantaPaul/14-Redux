import React from "react";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import { connect } from "react-redux";

class Counter extends React.Component {
  state = {
    counter: this.props.ctr
  };
  counterChangedHandler = (action, value) => {
    switch (action) {
      case "inc":
        this.setState(prev => {
          return { counter: prev.counter + 1 };
        });
        break;
      case "dec":
        this.setState(prev => {
          return { counter: prev.counter - 1 };
        });
        break;
      case "add":
        this.setState(prev => {
          return { counter: prev.counter + 5 };
        });
        break;
      case "sub":
        this.setState(prev => {
          return { counter: prev.counter - 5 };
        });
        break;
    }
  };
  render() {
    return (
      <div className="mt-5">
        <div className="container">
          <CounterOutput output={this.props.ctr} />
          <div className="media justify-content-between">
            <CounterControl
              classes="btn btn-primary btn-lg"
              label="Increment"
              clicked={this.props.onIncrementCounter}
            />
            <CounterControl
              classes="btn btn-danger btn-lg"
              label="Decrement"
              clicked={this.props.onDecrementCounter}
            />
            <CounterControl
              classes="btn btn-primary btn-lg"
              label="Increment 10"
              clicked={this.props.onAddCounter}
            />
            <CounterControl
              classes="btn btn-danger btn-lg"
              label="Decrement 10"
              clicked={this.props.onSubCounter}
            />
          </div>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    ctr: state.counter
  };
};

let mapDispatchToProps  = (dispatch) => {
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT', value: 1}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT', value: 1}),
        onAddCounter: () => dispatch({type: 'ADD', value: 10}),
        onSubCounter: () => dispatch({type: 'SUB', value: 10}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);