import React, {Component} from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default class extends Component {
  render() {
    return <div>
      <Router basename={this.props.basename}>
        <React.Fragment>
          <h2> Sub module </h2>
          <pre>{JSON.stringify(this.props)}</pre>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/1">User 1</Link>
            </li>
            <li>
              <Link to="/2">User 2</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/" render={props => <div><h1>Home</h1><pre>{JSON.stringify(props)}}</pre></div>} />
            <Route path="/about" render={props => <div><h1>About</h1><pre>{JSON.stringify(props)}}</pre></div>} />
            <Route path="/:user" render={props => <div><h1>User {props.match.params.user}</h1><pre>{JSON.stringify(props)}}</pre></div>} />
            <Route render={props => <div><h1>404</h1><pre>{JSON.stringify(props)}}</pre></div>} />
          </Switch>
        </React.Fragment>
      </Router>
    </div>
  }
}
