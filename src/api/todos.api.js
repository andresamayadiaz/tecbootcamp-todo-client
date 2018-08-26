import axios from "axios";

export default {
    getTodos: function() {
      return axios.get("/api/todos");
    },
    getTodo: function(id) {
      return axios.get("/api/todos/" + id);
    },
    getTodosCompleted: function() {
        return axios.get("/api/todos/completed");
    },
    getTodosUncompleted: function() {
        return axios.get("/api/todos/uncompleted");
    },
    postTodos: function(todo) {
        return axios.post("/api/todos", todo);
    },
    putTodos: function(todo) {
        return axios.put("/api/todos/"+todo.id, todo);
    },
    deleteTodos: function(id) {
        return axios.delete("/api/todos/"+id);
    }
  };