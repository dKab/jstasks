import React from 'react'
import { Link } from 'react-router-dom'
import classes from './NavBar.module.css';

const NavBar = () => (
  <nav className={classes.navigation}>
    <ul>
      {
      // Todo : autogenerate links
      }
      <li><Link to="/jstasks/tasks/1">1</Link></li>
      <li><Link to="/jstasks/tasks/2">2</Link></li>
      <li><Link to="/jstasks/tasks/3">3</Link></li>
      <li><Link to="/jstasks/tasks/4">4</Link></li>
      <li><Link to="/jstasks/tasks/5">5</Link></li>
      <li><Link to="/jstasks/tasks/6">6</Link></li>
      <li><Link to="/jstasks/tasks/7">7</Link></li>
      <li><Link to="/jstasks/tasks/8">8</Link></li>
      <li><Link to="/jstasks/tasks/9">9</Link></li>
      <li><Link to="/jstasks/tasks/10">10</Link></li>
    </ul>
  </nav>
)

export default NavBar
