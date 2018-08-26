import React, { Component } from 'react';
import TodosAPI from "../../api/todos.api";
import { Panel, Control, Input, Icon, Button } from 'reactbulma';

class TodoForm extends Component {
    
    state = {
        newtodo: ""
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit(cb)
    {
        TodosAPI.postTodos({name: this.state.newtodo})
        .then(todo => {
            this.setState({newtodo: ""});
            cb(); // Call the TodosList callback function
        })
        .catch(err => console.log(err));
    }

    render() {
        return (
            <Panel.Block>
                <Control hasIconsLeft>
                    <Input normal="true" type="text" placeholder="Add Todo" name="newtodo" value={this.state.newtodo} onChange={this.handleInputChange} />
                    <Icon small left>
                        <i className="fa fa-plus"/>
                    </Icon>
                </Control>
                <Button link onClick={() => this.handleFormSubmit(this.props.callback)}>ADD</Button>
            </Panel.Block>
        );
    }
};

export default TodoForm;