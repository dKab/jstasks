import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import Task from '../components/Task'
import NoMatch from '../components/NoMatch'
import NavBar from '../components/NavBar/NavBar'
import { Header } from '../components/Header/Header'

const routes = (
  <div>
    <Header />
    <NavBar />
    <Switch>
      <Route exact path="/jstasks/">
        <Redirect to="/jstasks/tasks/1" />
      </Route>
      <Route path="/jstasks/tasks/:id" component={Task} />
      <Route component={NoMatch} />
    </Switch>
  </div>
)

export default routes
