import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Badge from 'material-ui/Badge';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import FlatButton from 'material-ui/FlatButton';
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
      }
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

                <Drawer width={250} openSecondary={true} open={this.state.open} containerStyle={styles.userMenu.root}>
                    <AppBar style={styles.userMenu.title} iconElementLeft={<FlatButton label="Bruce Wayne" style={styles.userMenu.avatar} />} iconElementRight={<UserAvatar style={styles.userMenu.avatar} />} />
                    <List style={styles.userMenu}>
                        <ListItem onTouchTap={this.handleClose} primaryText="Messages" style={styles.userMenu} rightIcon={<Badge badgeContent={4} badgeStyle={styles.userMenu.badges}/>} leftIcon={<i className="fa fa-envelope" style={styles.icons.messages}></i>}><a href="#/" style={styles.drawer.MenuItem.a}></a></ListItem>
                        <Divider style={styles.userMenu.hr} />
                        <ListItem onTouchTap={this.handleClose} primaryText="My Profile" style={styles.userMenu} leftIcon={<i className="fa fa-user-circle" style={styles.icons.avatar}></i>} />
                        <Divider style={styles.userMenu.hr} />
                        <ListItem onTouchTap={this.handleClose} primaryText="Settings" style={styles.userMenu} leftIcon={<i className="fa fa-gear" style={styles.icons.settings}></i>} />
                        <Divider style={styles.userMenu.hr} />
                        <ListItem onTouchTap={this.handleClose} primaryText="Organization Home" style={styles.userMenu} leftIcon={<i className="fa fa-home" style={styles.icons.discovery}></i>} />
                        <Divider style={styles.userMenu.hr} />
                        <ListItem onTouchTap={this.handleClose} primaryText="Command Center" style={styles.userMenu.active} leftIcon={<i className="fa fa-rocket" style={styles.icons.commandCenter}></i>} />
                        <Divider style={styles.userMenu.hr} />
                    </List>
                </Drawer>
            </div>
        );
    }
}

export default TopBar;