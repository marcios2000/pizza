import React, { Component } from 'react';
import * as PizzaActions from './pizzaActions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import PizzaTable from './pizzaTable';



export class PizzaContainer extends Component {
   
    createPizza = (pizza) => {
        this.props.actions.CreatePizza(pizza)
    }


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



PizzaContainer.propTypes = {
    actions: PropTypes.object.isRequired,
    pizzas: PropTypes.array.isRequired
}


function mapStateToProps(state, ownProps) {
    return {
        pizzas: state.pizzas
    }
}



function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(PizzaActions, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PizzaContainer);
