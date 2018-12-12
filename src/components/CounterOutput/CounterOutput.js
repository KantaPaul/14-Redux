import React from "react";

class CounterOutput extends React.Component {
  render() {
    return (
      <div className="card mb-5">
        <div className="card-body text-center"><h5 className="card-title">{this.props.output}</h5></div>
      </div>
    );
  }
}

export default CounterOutput;
