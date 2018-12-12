import React from 'react';

class CounterControl extends React.Component {
    render () {
        return (
            <div className="text-center">
                <button className={this.props.classes} onClick={this.props.clicked}>
                    {this.props.label}
                </button>
            </div>
        )
    }
}

export default CounterControl;