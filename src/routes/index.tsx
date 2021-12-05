import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import Task from '../components/Task'
import Counter from '../components/Counter'
import NoMatch from '../components/NoMatch'
import NavBar from '../components/NavBar/NavBar'
import { Header } from '../components/Header/Header'

const routes = (
  <div>
    <Header />
    <NavBar />
    <Switch>
      <Route exact path="/">
        <Redirect to="/tasks/1" />
      </Route>
      <Route path="/tasks/:id" component={Task} />
      <Route path="/counter" component={Counter} />
      <Route component={NoMatch} />
    </Switch>
  </div>
)

export default routes
