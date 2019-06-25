import React from 'react';

import {Button, Table} from 'semantic-ui-react'

// The Todo Row component is a simple stateless component, It simply takes the props 
// and maps the specific events to the methods of parent component 

const PizzaRow = (props) => {
    return (

        // getClass Name assigns the class names of this element 

        <Table.Row className={getClassName(props)}>
            <Table.Cell>{props.pizza.title}</Table.Cell>
            <Table.Cell>{props.pizza.description}</Table.Cell>
            <Table.Cell>{props.pizza.date}</Table.Cell>
            <Table.Cell className="options">
                {props.pizza.status !== 'done' && <Button className="option-buttons" color='green' onClick={props.completePizza}>
                    <i className="fa fa-check"></i>
                </Button>}
                <Button className="option-buttons" color='blue' onClick={props.startEditing}>
                    <i className="fa fa-pencil"></i>
                </Button>
                <Button className="option-buttons" color='red' onClick={props.deletePizza}>
                    <i className="fa fa-trash"></i>
                </Button>
            </Table.Cell>
        </Table.Row>
    );
}

// Right now Updating, done and deleting these three states are represented with different Class Name

const getClassName = (props) => {
    return `
    
    ${props.pizza.updating
        ? "updating"
        : ""}
    ${props.pizza.status == 'done'
            ? "done"
            : ""}
    ${props.pizza.deleting
                ? "deleting"
                : ""}
    `
}

export default PizzaRow;