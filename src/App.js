import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import './App.css';
import {grey900} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Container from './components/container';
import {Activity} from './components/activities';


const muiTheme = getMuiTheme({
  palette: {
    textColor: grey900,
  },
  TopBar: {
    height: 50,
    background: grey900,
  },
});

const App = React.createClass({
  render() {
  return(
    <div className="App">
      <MuiThemeProvider muiTheme={muiTheme}>
        <Container>{this.props.children}</Container>
      </MuiThemeProvider>
    </div>
  )
 }
})

const About = React.createClass({
  render() {
    return(
      <div>
      <h1>About</h1>
      </div>
    )
  }
 })

 const Roster = React.createClass({
  render() {
    return(
      <div>
      <h1>Roster</h1>
      </div>
    )
  }
 })

const NoMatch = React.createClass({
  render() {
    return(
      <div>
      <h1>No Match</h1>
      </div>
    )
  }
})

const Users = React.createClass({
  render() {
    return (
      <div>
        <h1>Users</h1>
        <div className="master">
          <ul>
            {/* use Link to route around the app */}
            {this.state.users.map(user => (
              <li key={user.id}><Link to={`/user/${user.id}`}>{user.name}</Link></li>
            ))}
          </ul>
        </div>
        <div className="detail">
          {this.props.children}
        </div>
      </div>
    )
  }
})

const User = React.createClass({
  componentDidMount() {
    this.setState({
      // route components are rendered with useful information, like URL params
      // user: findUserById(this.props.params.userId)
    })
  },

  render() {
    return (
      <div>
        <h2>{this.state.user.name}</h2>
        {/* etc. */}
      </div>
    )
  }
})

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/about" component={About}/>
      <Route path="/roster" component={Roster}/>
      <Route path="/activity" component={Activity}>
        <Route path="/user/:userId" component={User}/>
      </Route>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
), document.getElementById('root'))

export default App;
