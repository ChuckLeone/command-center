import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import './App.css';
import {grey900} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Container from './components/container';
import About from './components/about';
import Roster from './components/roster';
import Activity from './components/activities';


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

const AboutApp = React.createClass({
  render() {
    return(
      <About />
    )
  }
 })

 const RosterApp = React.createClass({
  render() {
    return(
      <Roster />
    )
  }
 })

 const ActivityApp = React.createClass({
  render() {
    return(
      <Activity />
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

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="about" component={AboutApp}/>
      <Route path="roster" component={RosterApp}/>
      <Route path="activity" component={ActivityApp}>
      </Route>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
), document.getElementById('root'))

export default App;
