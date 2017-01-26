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
import AppSwitcherBar from './components/AppSwitcher';
import SiteHeader from './components/SiteHeader';

const styles = {
  full: {
    height: '100%',
  },
};

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
  getInitialState() {
    return {
      selectedApp: 'home',
    };
  },
  onChangeApp(e) {
    console.log('App was switched');
    this.setState({ selectedApp: e.target.value });
  },
  render() {
    let pageRender;
    if (this.props.children) {
      pageRender =
        (<div style={styles.full}>
          <SiteHeader />
          <AppSwitcherBar title={this.props.selectedApp} onChange={this.props.onChangeApp} />
          <div>{this.props.children}</div>
        </div>);
    } else {
      pageRender =
        (<div style={styles.full}>
          <SiteHeader />
          <AppSwitcherBar title="Home" onChange={this.props.onChangeApp} />
          <Home />
        </div>);
    }
    return (
      <div className="App" style={styles.full}>
        <MuiThemeProvider muiTheme={muiTheme}>
          { pageRender }
        </MuiThemeProvider>
      </div>
    );
  },
});

class AboutApp extends React.Component {
  constructor(props) {
    super(props);
    this.title = 'About App';
  }
  render() {
    return (
      <About title={this.title} value={this.title} />
    );
  }
}

class RosterApp extends React.Component {
  constructor(props) {
    super(props);
    this.title = 'Roster App';
  }
  render() {
    return (
      <Roster title={this.title} value={this.title} />
    );
  }
}

class ActivityApp extends React.Component {
  constructor(props) {
    super(props);
    this.selectedApp = 'Activity Feed';
  }
  render() {
    return (
      <Activity title={this.selectedApp} />
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
