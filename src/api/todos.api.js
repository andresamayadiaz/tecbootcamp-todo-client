import axios from "axios";

export default {
    getTodos: function() {
      return axios.get(process.env.API_URL + "/api/todos");
    },
    getTodo: function(id) {
      return axios.get(process.env.API_URL + "/api/todos/" + id);
    },
    getTodosCompleted: function() {
        return axios.get(process.env.API_URL + "/api/todos/completed");
    },
    getTodosUncompleted: function() {
        return axios.get(process.env.API_URL + "/api/todos/uncompleted");
    },
    postTodos: function(todo) {
        return axios.post(process.env.API_URL + "/api/todos", todo);
    },
    putTodos: function(todo) {
        return axios.put(process.env.API_URL + "/api/todos/"+todo.id, todo);
    },
    deleteTodos: function(id) {
        return axios.delete(process.env.API_URL + "/api/todos/"+id);
    }
  };