import axios from "axios";

export default {
    getTodos: function() {
      return axios.get("http://127.0.0.1:3001/api/todos");
    },
    getTodo: function(id) {
      return axios.get("http://127.0.0.1:3001/api/todos/" + id);
    },
    getTodosCompleted: function() {
        return axios.get("http://127.0.0.1:3001/api/todos/completed");
    },
    getTodosUncompleted: function() {
        return axios.get("http://127.0.0.1:3001/api/todos/uncompleted");
    },
    postTodos: function(todo) {
        return axios.post("http://127.0.0.1:3001/api/todos", todo);
    },
    putTodos: function(todo) {
        return axios.put("http://127.0.0.1:3001/api/todos/"+todo.id, todo);
    },
    deleteTodos: function(id) {
        return axios.delete("http://127.0.0.1:3001/api/todos/"+id);
    }
  };