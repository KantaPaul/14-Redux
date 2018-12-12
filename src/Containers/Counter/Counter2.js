import React from "react";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends React.Component {
  state = {
    counter: 0
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
          <CounterOutput output={this.state.counter} />
          <div className="media justify-content-between">
            <CounterControl
              classes="btn btn-primary btn-lg"
              label="Increment"
              clicked={() => this.counterChangedHandler("inc")}
            />
            <CounterControl
              classes="btn btn-danger btn-lg"
              label="Decrement"
              clicked={() => this.counterChangedHandler("dec")}
            />
            <CounterControl
              classes="btn btn-primary btn-lg"
              label="Increment 5"
              clicked={() => this.counterChangedHandler("add")}
            />
            <CounterControl
              classes="btn btn-danger btn-lg"
              label="Decrement 5"
              clicked={() => this.counterChangedHandler("sub")}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
