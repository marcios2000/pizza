import React, { Component } from 'react';
import * as PizzaActions from './pizzaActions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import PizzaTable from './pizzaTable';



export class PizzaContainer extends Component {
    constructor(props) {
        super(props)
    }

    // Todo Container methods dispatch the actions to the reducer functions. Ordered by CRUD Order

    //Create
    createPizza = (pizza) => {
        this.props.actions.CreatePizza(pizza)
    }


    // No methods for reading, the first loading of data is done in App.js where the
    // getTodo Action is dispatched

    //Update
    startEditing = (id) => {
        this.props.actions.StartEditing(id)
    }
    cancelEditing = (id) => {
        this.props.actions.CancelEditing(id)
    }
    editPizza = (pizza) => {
        this.props.actions.UpdatePizza(pizza)
    }
    completePizza = (pizza) => {
        this.props.actions.UpdatePizza({...pizza, status: 'done'})
    }

    //Delete
    deletePizza = (pizza) => {
        this.props.actions.DeletePizza(pizza)
    }

    render() {
        return (
            <div className="pizza-container">
                <PizzaTable
                    pizzas={this.props.pizzas}
                    createPizza={this.createPizza}
                    startEditing={this.startEditing}
                    cancelEditing={this.cancelEditing}
                    editPizza={this.editPizza}
                    completePizza = {this.completePizza}
                    deletePizza = {this.deletePizza}
                />
            </div>
        );
    }
}

// Define the property types of this Container Component

PizzaContainer.propTypes = {
    actions: PropTypes.object.isRequired,
    pizzas: PropTypes.array.isRequired
}

// This maps the state to the property of the component

function mapStateToProps(state, ownProps) {
    return {
        pizzas: state.pizzas
    }
}

// This maps the dispatch to the property of the component

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(PizzaActions, dispatch)
    }
}

// The connect function connects the Redux Dispatch and state to the Todo Container Component.
// Without this the Component wont be functional.

export default connect(mapStateToProps, mapDispatchToProps)(PizzaContainer);
