import React from 'react';

import {Button, Icon, Label, Menu, Table} from 'semantic-ui-react'
import PizzaRow from './pizzaRow'
import EditPizza from './editPizza'


// TodoTable is a Stateless component

const PizzaTable = (props) => {
    return (

        <Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Title</Table.HeaderCell>
                    <Table.HeaderCell>Description</Table.HeaderCell>
                    <Table.HeaderCell>Date</Table.HeaderCell>
                    <Table.HeaderCell>Options</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>

                {/* This maps the todos recieved as a prop */}

                {props
                    .pizzas
                    .map(t => {

                        // If the todo is being edited, EditTodo Component is rendered here

                        if (t.editing) {
                            return <EditPizza
                                editPizza={props.editPizza}
                                cancelEditing={e => props.cancelEditing(t._id)}
                                key={t._id}
                                pizza={t}/>
                        } else {

                            // Is the todo is not being edited the TodoRow stateless component is returned

                            return <PizzaRow
                                todo={t}
                                key={t._id}
                                completePizza={e => props.completePizza(t)}
                                startEditing={e => props.startEditing(t._id)}
                                deletePizza={e=> props.deletePizza(t)}
                            />
                        }
                    })}
                
                {/* This EditTodo component is used as a Create new Todo Component */}
                {/* Thus by using the same component for both use, we can reuse a lot of the codes */}
                
                <EditPizza createPizza={props.createPizza} />
            </Table.Body>

        </Table>
    )
}

export default PizzaTable;