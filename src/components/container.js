import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import {Card, CardHeader, CardMedia, CardTitle, CardText, CardActions} from 'material-ui/Card';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import TopBar from './top-bar-nav';
import FontIcon from 'material-ui/FontIcon';
import SiteHeader from './site-header';
// import { BrowserRouter, Match, Miss, Link } from 'react-router';

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';


const styles = {
  button: {
    margin: 12,
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
};

class Container extends React.Component {
    
    render() {
        return (      
        <div>         
            <TopBar title="App Title" /> 
        </div>
        );
    }
}


export default Container;