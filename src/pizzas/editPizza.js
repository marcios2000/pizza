import React, {Component} from 'react';
import {Button, Icon, Label, Menu, Table} from 'semantic-ui-react'
import {Input} from 'semantic-ui-react'
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class EditPizza extends Component {

    constructor(props) {
        super(props);
        // If props.todo exists this component is used to  Edit a Todo, 
        // else this is a Create New Todo Component

        if (this.props.pizza) {
            this.state = {
                ...this.props.pizza
            }
        } else {
            this.state = {
                ...this.emptyPizza()
            }
        }
    }

    //Initializes a Empty Todo Object

    emptyPizza = () => {
        return {title: "", description: "", date: ''}
    }


    // Input change handling methods

    changeNewTitle = (event) => {
        this.setState({title: event.target.value})
    }

    changeNewDescription = (event) => {
        this.setState({description: event.target.value})
    }

    changeNewDate = (event) => {
        this.setState({date: event})
    }

    // Form submission methods

    createPizza = (event) => {
        this.resetPizza()
        this.props.createPizza(this.state)
    }
    editPizza = (event) => {
        this.props.editPizza(this.state)
    }


    // Modifying the inputs indirectly methods

    resetPizza = () => {
        this.setState({title: "", description: "", date: ''  }) //moment
    }
    cancelEditing = () => {
        this.props.cancelEditing();
    }

    // Convert the date to moment object for the React DatePicker

    getDateForDatePicker() {
        return ''     // moment(this.state.date)
    }

    render() {
        return (
            <Table.Row>

                <Table.Cell>

                    {/* The Value flows the data from the state to the control */}
                    {/* The onChange method pass the value from the Control to the State, It takes a method reference */}
                    {/* In this way a controlled two way binding is established */}

                    <Input                        
                        placeholder='Title'
                        value={this.state.title}
                        onChange={this.changeNewTitle}/>
                </Table.Cell>

                <Table.Cell>
                    <Input
                        placeholder='Description'
                        value={this.state.description}
                        onChange={this.changeNewDescription}/>
                </Table.Cell>

                <Table.Cell>

                    {/* React Datepicker gets the moment date from the class method */}

                    <DatePicker
                        selected={this.getDateForDatePicker()}
                        onChange={this.changeNewDate}/>
                </Table.Cell>

                {/* The options component takes the inputs and decide if It's an option for a Edit Todo or Add New Todo */}

                <Options
                    pizza={this.props.pizza}    
                    editPizza={this.editPizza}
                    createPizza={this.createPizza}
                    resetPizza={this.resetPizza}
                    cancelEdit={this.cancelEditing}
                />

            </Table.Row>
        )
    }
}

export default EditPizza;


// The option component decides the component usage

const Options = (props) => {
    if (props.pizza && props.pizza.editing) {
        return EditOptions(props);
    } else {
        return AddOptions(props);
    }
}

// The two local components - EditOptions and AddOptions simply maps their events 
// to the state events of their parent compoent through the props


const EditOptions = (props) => {
    return (
        <Table.Cell>
            <Button color='green' onClick={props.editPizza}>
                Edit
            </Button>
            < Button color='blue' onClick={props.cancelEdit}>
                Cancel
            </Button>
        </Table.Cell>
    );
}

const AddOptions = (props) => {
    return (
        <Table.Cell>
            <Button color='green' onClick={props.createPizza}>
                Create
            </Button>
            < Button color='blue' onClick={props.resetPizza}>
                Reset
            </Button>
        </Table.Cell>
    );
}
