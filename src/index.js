import React, {Component} from 'react'
import { Switch, Route } from 'react-router';

export default class extends Component {
  render() {
    return <Switch>
      <Route exact path="/" render={props => <div><h1>Home</h1><pre>{JSON.stringify{props}}}</pre></div>} />
      <Route path="/about" render={props => <div><h1>About</h1><pre>{JSON.stringify{props}}}</pre></div>} />
      <Route path="/:user" render={props => <div><h1>User</h1><pre>{JSON.stringify{props}}}</pre></div>} />
      <Route render={props => <div><h1>404</h1><pre>{JSON.stringify{props}}}</pre></div>} />
    </Switch>
  }
}
