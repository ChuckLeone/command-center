import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Badge from 'material-ui/Badge';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import UserAvatar from './user-avatar';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const styles = {
  avatar: {
      margin: '0'
  },
  title: {
    cursor: 'pointer',
  },
  drawer: {
    backgroundColor: '#eaeaea',
    textAlign: 'left',
        title: {
            backgroundColor: '#787878',
            color: '#ffffff'
        },
        MenuItem:{ 
            a: {
                textDecoration: 'none',
                color: '#000000'
            }
        }
  },
  userMenu: {
      color: 'white',
      textAlign: 'left',
      backgroundColor: '#333333',
      list: {
          padding: '16px 16px 16px 45px'
      },
      title: {
        fontSize: '14px'
      },
      root: {
          backgroundColor: '#333333'
      },
      avatar: {
        color: 'white',
      },
      hr: {
        height: '2px',
        backgroundColor: 'rgb(95, 95, 95)'
      }, 
      active: {
        color: 'white',
        borderLeft: '3px solid greenyellow'
      },
      title: {
          fontSize: '14px',
          backgroundColor: '#333333'
      },
      badges: {
        color: 'white',
        backgroundColor: 'red'
      },
      userCard: {
          backgroundColor: 'black',         
          color: 'white'
      },
  },
  icons: {
      avatar: {
          color: 'green'
      },
      messages: {
          color: 'gold'
      },
      settings: {
          color: 'darkorchid'
      },
      discovery: {
          color: 'deepskyblue'
      },
      commandCenter: {
          color: 'white'
      }
  },
  secondaryText: {
      color: 'white'
  },
  Subheader: {
      color: 'white',
      textAlign: 'left',
      fontSize: '18px',
      backgroundColor: 'rgba(0, 0, 0, 0.2)'
  },
  ActivityFeed: {
      position: 'absolute',
      bottom: '0',

  },
  Avatar: {
      backgroundColor: 'azure'
  }
};

class UserDrawer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    };
    
    handleToggle = () => this.setState({open: !this.state.open});

    handleOpen = () => this.seteState({open: !this.state.open});

    handleClose = () => this.setState({open: false});

    handleUserToggle = () => this.setState({open: !this.state.open});

    render() {
        return (
            <div>
                 <Drawer width={300} openSecondary={true} open={this.state.open} containerStyle={styles.userMenu.root}>
                    <AppBar style={styles.userMenu.title} iconElementLeft={<FlatButton style={styles.userMenu.avatar} />} iconElementRight={<UserAvatar style={styles.userMenu.avatar} />} />
                    <List style={styles.userMenu}>
                       <ListItem
                        rightIcon={<i className="fa fa-edit"></i>}
                        primaryText="Bruce Wayne"
                        secondaryText="bwayne@ublinked.edu"
                        style={styles.userMenu.userCard}
                        />
                        <Divider style={styles.userMenu.hr} />
                        <ListItem onTouchTap={this.handleClose} primaryText="My Profile" style={styles.userMenu} leftIcon={<i className="fa fa-user-circle" style={styles.icons.avatar}></i>} />
                        <Divider style={styles.userMenu.hr} />
                        <ListItem onTouchTap={this.handleClose} primaryText="Settings" style={styles.userMenu} leftIcon={<i className="fa fa-gear" style={styles.icons.settings}></i>} />
                        <Divider style={styles.userMenu.hr} />
                        <ListItem onTouchTap={this.handleClose} primaryText="Organization Home" style={styles.userMenu} leftIcon={<i className="fa fa-home" style={styles.icons.discovery}></i>} />
                        <Divider style={styles.userMenu.hr} />
                        <ListItem onTouchTap={this.handleClose} primaryText="Command Center" style={styles.userMenu.active} rightIcon={<Badge badgeContent={13} badgeStyle={styles.userMenu.badges}/>} leftIcon={<i className="fa fa-rocket" style={styles.icons.commandCenter}></i>} />
                        </List>
                        <Divider style={styles.userMenu.hr} />
                        <List style={styles.ActivityFeed}>
                        <Subheader style={styles.Subheader}>Activity Feed</Subheader>
                        <ListItem onTouchTap={this.handleClose} primaryText="You submitted a request for a parking pass." leftIcon={<i className="fa fa-flag" />} style={styles.userMenu} />
                        <ListItem onTouchTap={this.handleClose} primaryText="A new form approval request was generated." leftIcon={<i className="fa fa-flag" />} style={styles.userMenu} />
                        <ListItem onTouchTap={this.handleClose} primaryText="A new event request was submitted." leftIcon={<i className="fa fa-flag" />} style={styles.userMenu} />
                        <ListItem onTouchTap={this.handleClose} primaryText="Bake Sale form is awaiting your approval." leftIcon={<i className="fa fa-flag" />} style={styles.userMenu} />
                        <Divider style={styles.userMenu.hr} />
                         <ListItem onTouchTap={this.handleClose} primaryText="See more (15)" style={styles.userMenu} />
                        </List>
                </Drawer>
            </div>
        );
    }
}

export default UserDrawer;