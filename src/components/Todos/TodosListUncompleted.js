import React, { Component } from 'react';
import TodoForm from "../Todos/TodoForm";
import TodosAPI from "../../api/todos.api";
import Todo from "./Todo";

class TodosListUncompleted extends Component {

    state = {
        todos: [],
        newtodo: ""
    }

    componentDidMount()
    {
        this.loadTodos();
    }

    loadTodos()
    {
        TodosAPI.getTodosUncompleted()
        .then((todos) => {
            this.setState({todos: todos.data});
        })
        .catch(err => {
            alert("Error trying to load Todos.");
        });
    }
    
    render () {
        return (
            <div id="TodosList">
                <TodoForm callback={() => this.loadTodos()}/>
                <div id="Todos">
                    {this.state.todos.map( todo => {
                        return <Todo key={todo._id} id={todo._id} name={todo.name} done={todo.done} />
                    })
                    };
                </div>
            </div>
        )
    }
}

export default TodosListUncompleted;