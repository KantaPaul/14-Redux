import React, {Component} from 'react';

class AddPerson extends Component {
    state = {
        name: '',
        age: ''
    }

    nameChangedHandeler = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    ageChangedHandeler = (e) => {
        this.setState({
            age: e.target.value
        })
    }

    render () {
        return (
            <div>
                <input className="form-control mb-3" type="text" placeholder="Name" onChange={this.nameChangedHandeler} value={this.state.name} />
                <input className="form-control mb-3" type="number" placeholder="Age" onChange={this.ageChangedHandeler} value={this.state.age} />
                <button className="btn btn-primary" onClick={() => this.props.personAdded(this.state.name, this.state.age)}>Add Person</button>
            </div>
        )
    }
}

export default AddPerson;