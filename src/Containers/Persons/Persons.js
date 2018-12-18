import React, {Component} from 'react';
import { connect } from 'react-redux';
import Person from '../../components/Person/Person';
import AddPerson from '../../components/AddPerson/Addperson';
import * as actions from '../../Store/reducers/PersonActions';

class Persons extends Component {
    render () {
        return (
            <div className="mt-5">
                <div className="container">
                    <AddPerson personAdded={this.props.onAddedPerson} />
                    {this.props.prs.map(person => (
                        <Person 
                            name={person.name} 
                            age={person.age} 
                            key={person.id}
                            clicked={() => this.props.onRemovedPerson(person.id)}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        prs: state.persons
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddedPerson: (name, age) => dispatch({type: actions.ADD_PERSON, personData: {name: name, age: age}}),
        onRemovedPerson: (id) => dispatch({type: actions.REMOVE_PERSON, personId: id})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);