import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "../../pages/NoMatch/NoMatch";
import About from "../../pages/About/About";
import TodosListAll from "../Todos/TodosListAll";
import TodosListCompleted from "../Todos/TodosListCompleted";
import TodosListUncompleted from "../Todos/TodosListUncompleted";
import Menu from "../Menu/Menu";
import 'bulma/css/bulma.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div id="App">
        <Menu />
        <Switch>
          <Route exact path="/" component={TodosListAll} />
          <Route exact path="/completed" component={TodosListCompleted} />
          <Route exact path="/uncompleted" component={TodosListUncompleted} />
          <Route exact path="/about" component={About} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
