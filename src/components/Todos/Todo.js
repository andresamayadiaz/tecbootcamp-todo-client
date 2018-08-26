import React, { Component } from 'react';
import { Panel } from 'reactbulma';
import TodosAPI from "../../api/todos.api";

class Todo extends Component{

    state = {
        id: this.props.id,
        name: this.props.name,
        done: this.props.done
    }

    handleInputChange = () => {
        TodosAPI.putTodos({
            id: this.state.id,
            name: this.state.name,
            done: !this.state.done
        })
        .then(todo => {
            this.setState({done: !this.state.done})
        })
        .catch( err => console.log(err));
    };

    render()
    {
        return (
            <Panel.Block active>
                    <input type="hidden" value={this.state.id} />
                    <input type="checkbox" defaultChecked={this.state.done} onChange={this.handleInputChange} />
                    {this.state.name}
            </Panel.Block>
        )
    }
}

export default Todo;