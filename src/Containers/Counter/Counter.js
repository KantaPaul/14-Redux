import React from "react";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import { connect } from "react-redux";
import * as actionTypes from '../../Store/actions';

class Counter extends React.Component {
  state = {
    counter: this.props.ctr
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
          <div className="mt-3">
            <button className="btn btn-info" onClick={() => this.props.onRsultAdd(this.props.ctr)}>
              Add Result
            </button>
            <ol className="text-center">
              {this.props.results.map(result => (
                <li key={result.id}>
                  {result.value}{" "}
                  <button
                    className="btn btn-danger"
                    onClick={() => this.props.onRsultDelete(result.id)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

let mapStateToProps = state => {
  return {
    ctr: state.ctr.counter,
    results: state.res.result
  };
};

let mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT, value: 1 }),
    onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT, value: 1 }),
    onAddCounter: () => dispatch({ type: actionTypes.ADD, value: 10 }),
    onSubCounter: () => dispatch({ type: actionTypes.SUB, value: 10 }),
    onRsultAdd: (result) => dispatch({ type: actionTypes.STORE_RESULT , result: result}),
    onRsultDelete: (id) => dispatch({ type: actionTypes.DELETE_RESULT, resultid: id })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
