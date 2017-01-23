import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import './App.css';
import { grey900 } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Container from './components/Container';
import Home from './components/Home';
import About from './components/About';
import Roster from './components/Roster';
import Activity from './components/Activities';


const muiTheme = getMuiTheme({
  palette: {
    textColor: grey900,
  },
  TopBar: {
    height: 50,
    background: grey900,
  },
});

class App extends React.Component {
  render() {
    let pageRender;
    if (this.props.children) {
      pageRender = <Container>{this.props.children}</Container>;
    } else {
      pageRender = <Container><Home /></Container>;
    }
    return (
      <div className="App">
        <MuiThemeProvider muiTheme={muiTheme}>
          { pageRender }
        </MuiThemeProvider>
      </div>
    );
  }
}

class AboutApp extends React.Component {
  render() {
    return (
      <About />
    );
  }
}

class RosterApp extends React.Component {
  render() {
    return (
      <Roster />
    );
  }
}

class ActivityApp extends React.Component {
  render() {
    return (
      <Activity />
    );
  }
}

class NoMatch extends React.Component {
  render() {
    return (
      <div>
        No matches
      </div>
    );
  }
}

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="about" component={AboutApp} />
      <Route path="roster" component={RosterApp} />
      <Route path="activity" component={ActivityApp} />
      <Route path="*" component={NoMatch} />
    </Route>
  </Router>
), document.getElementById('root'));

export default App;
