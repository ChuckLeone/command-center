import React, { Component } from 'react';
import './App.css';
import {grey900} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Container from './components/container';

const muiTheme = getMuiTheme({
  palette: {
    textColor: grey900,
  },
  TopBar: {
    height: 50,
    background: grey900,
  },
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider muiTheme={muiTheme}>
          <Container />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
