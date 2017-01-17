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

class TopBar extends React.Component {
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
            <AppBar
                title={<span style={styles.title}>Organization Name</span>}
                onLeftIconButtonTouchTap={this.handleToggle}
                onRightIconButtonTouchTap={this.handleToggle}
                iconElementLeft={<IconButton><NavigationMenu /></IconButton>}
                iconElementRight={<IconButton><UserAvatar /></IconButton>}
                iconStyleRight={styles.avatar}
                style={{
                    backgroundColor: '#393939'
                }} />
                <Drawer
                    docked={false}
                    width={300}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})} 
                    style={styles.drawer}>
                     <AppBar style={styles.drawer.title} title="Command Center" />
                    <MenuItem onTouchTap={this.handleClose} leftIcon={<i className="fa fa-home"></i>}><a href="#/" style={styles.drawer.MenuItem.a}>Home</a></MenuItem>
                    <MenuItem onTouchTap={this.handleClose} leftIcon={<i className="fa fa-user-plus"></i>}><a href="#/roster" style={styles.drawer.MenuItem.a}>Roster</a></MenuItem>
                    <MenuItem onTouchTap={this.handleClose} leftIcon={<i className="fa fa-info"></i>}><a href="#/about" style={styles.drawer.MenuItem.a}>About</a></MenuItem>
                    <MenuItem onTouchTap={this.handleClose} leftIcon={<i className="fa fa-calendar"></i>}><a href="#/events" style={styles.drawer.MenuItem.a}>Events</a></MenuItem>
                    <MenuItem onTouchTap={this.handleClose} leftIcon={<i className="fa fa-newspaper-o"></i>}><a href="#/news" style={styles.drawer.MenuItem.a}>News</a></MenuItem>
                    <MenuItem onTouchTap={this.handleClose} leftIcon={<i className="fa fa-image"></i>}><a href="#/gallery" style={styles.drawer.MenuItem.a}>Gallery</a></MenuItem>
                    <MenuItem onTouchTap={this.handleClose} leftIcon={<i className="fa fa-file-text-o"></i>}><a href="#/docs" style={styles.drawer.MenuItem.a}>Docs</a></MenuItem>
                    <MenuItem onTouchTap={this.handleClose} leftIcon={<i className="fa fa-files-o"></i>}><a href="#/forms" style={styles.drawer.MenuItem.a}>Forms</a></MenuItem>
                    <MenuItem onTouchTap={this.handleClose} leftIcon={<i className="fa fa-hourglass-3"></i>}><a href="#/service-hours" style={styles.drawer.MenuItem.a}>Service Hours</a></MenuItem>
                    <MenuItem onTouchTap={this.handleClose} leftIcon={<i className="fa fa-gavel"></i>}><a href="#/elections" style={styles.drawer.MenuItem.a}>Elections</a></MenuItem>
                    <MenuItem onTouchTap={this.handleClose} leftIcon={<i className="fa fa-money"></i>}><a href="#/finance" style={styles.drawer.MenuItem.a}>Finance</a></MenuItem>
                    <Divider />
                     <MenuItem onTouchTap={this.handleClose} leftIcon={<i className="fa fa-gear"></i>}><a href="#/settings" style={styles.drawer.MenuItem.a}>Settings</a></MenuItem>
                </Drawer>

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

export default TopBar;