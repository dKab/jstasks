import React from 'react'
import { Link } from 'react-router-dom'
import classes from './NavBar.module.css';

const NavBar = () => (
  <nav className={classes.navigation}>
    <ul>
      {
      // Todo : autogenerate links
      }
      <li><Link to="/tasks/1">1</Link></li>
      <li><Link to="/tasks/2">2</Link></li>
      <li><Link to="/tasks/3">3</Link></li>
      <li><Link to="/tasks/4">4</Link></li>
      <li><Link to="/tasks/5">5</Link></li>
      <li><Link to="/tasks/6">6</Link></li>
      <li><Link to="/tasks/7">7</Link></li>
      <li><Link to="/tasks/8">8</Link></li>
      <li><Link to="/tasks/9">9</Link></li>
      <li><Link to="/tasks/10">10</Link></li>
    </ul>
  </nav>
)

export default NavBar
