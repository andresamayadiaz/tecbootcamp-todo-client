import React from "react";
import { Link } from "react-router-dom";
import { Panel } from 'reactbulma';

const Menu = () => (
  <Panel>
    <Panel.Heading>
      TEC BOOTCAMP TODOS
    </Panel.Heading>

    <Panel.Tabs>

      <Link to="/" className={window.location.pathname === "/" ? "menu-active" : ""}>All</Link>
      <Link to="/completed" className={window.location.pathname === "/completed" ? "menu-active" : ""}>Completed</Link>
      <Link to="/uncompleted" className={window.location.pathname === "/uncompleted" ? "menu-active" : ""}>Uncompleted</Link>
      <Link to="/about" className={window.location.pathname === "/about" ? "menu-active" : ""}>About</Link>
      
    </Panel.Tabs>
  </Panel>
);

export default Menu;