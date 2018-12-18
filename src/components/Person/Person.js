import React,{Component} from 'react';

class Person extends Component {
    render () {
        return (
            <div className="person">
                <h5>Name: {this.props.name}</h5>
                <p>Age: {this.props.age}</p>
                <button className="btn btn-danger" onClick={this.props.clicked}>Remove</button>
            </div>
        )
    }
}

export default Person;