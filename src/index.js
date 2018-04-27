import React, {Component} from 'react'
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';

export default class extends Component {
  render() {
    return <div>
        <h2> Sub module </h2>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/user1">User 1</Link>
          </li>
          <li>
            <Link to="/user2">User 2</Link>
          </li>
        </ul>
      <Switch>
        <Route exact path="/" render={props => <div><h1>Home</h1><pre>{JSON.stringify(props)}}</pre></div>} />
        <Route path="/about" render={props => <div><h1>About</h1><pre>{JSON.stringify(props)}}</pre></div>} />
        <Route path="/:user" render={props => <div><h1>User</h1><pre>{JSON.stringify(props)}}</pre></div>} />
        <Route render={props => <div><h1>404</h1><pre>{JSON.stringify(props)}}</pre></div>} />
      </Switch>
    </div>
  }
}
