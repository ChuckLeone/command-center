import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import UserMenu from 'material-ui/svg-icons/social/person';
import FlatButton from 'material-ui/FlatButton';
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

function saySomething() {
  console.log('something');
}

function handleTouchTap() {
  alert('onTouchTap triggered on the title component');
  saySomething();
}

function handleToggle() {
  AppSwitcher().open
}

const handleUserToggle = () => AppSwitcher().open({open: !open});

function AppSwitcher() {

        const setState = {open: false};

        handleToggle = () => this.setState({open: !this.state.open});

    handleOpen = () => this.seteState({open: !this.state.open});

    handleClose = () => this.setState({open: false});

    handleUserToggle = () => this.setState({open: !this.state.open});

        return (
            <div>
             <Drawer
                    docked={false}
                    width={300}
                    onRequestChange={(open) => this.setState({open})} 
                    open={setState.true}
                    style={styles.drawer}>
                     <AppBar style={styles.drawer.title} title="Command Center" />
                    <MenuItem onTouchTap={handleToggle} leftIcon={<i className="fa fa-home"></i>}><a href="#/" style={styles.drawer.MenuItem.a}>Home</a></MenuItem>
                    <MenuItem onTouchTap={handleToggle} leftIcon={<i className="fa fa-user-plus"></i>}><a href="#/roster" style={styles.drawer.MenuItem.a}>Roster</a></MenuItem>
                    <MenuItem onTouchTap={handleToggle} leftIcon={<i className="fa fa-info"></i>}><a href="#/about" style={styles.drawer.MenuItem.a}>About</a></MenuItem>
                    <MenuItem onTouchTap={handleToggle} leftIcon={<i className="fa fa-calendar"></i>}><a href="#/events" style={styles.drawer.MenuItem.a}>Events</a></MenuItem>
                    <MenuItem onTouchTap={handleToggle} leftIcon={<i className="fa fa-newspaper-o"></i>}><a href="#/news" style={styles.drawer.MenuItem.a}>News</a></MenuItem>
                    <MenuItem onTouchTap={handleToggle} leftIcon={<i className="fa fa-image"></i>}><a href="#/gallery" style={styles.drawer.MenuItem.a}>Gallery</a></MenuItem>
                    <MenuItem onTouchTap={handleToggle} leftIcon={<i className="fa fa-file-text-o"></i>}><a href="#/docs" style={styles.drawer.MenuItem.a}>Docs</a></MenuItem>
                    <MenuItem onTouchTap={handleToggle} leftIcon={<i className="fa fa-files-o"></i>}><a href="#/forms" style={styles.drawer.MenuItem.a}>Forms</a></MenuItem>
                    <MenuItem onTouchTap={handleToggle} leftIcon={<i className="fa fa-hourglass-3"></i>}><a href="#/service-hours" style={styles.drawer.MenuItem.a}>Service Hours</a></MenuItem>
                    <MenuItem onTouchTap={handleToggle} leftIcon={<i className="fa fa-gavel"></i>}><a href="#/elections" style={styles.drawer.MenuItem.a}>Elections</a></MenuItem>
                    <MenuItem onTouchTap={handleToggle} leftIcon={<i className="fa fa-money"></i>}><a href="#/finance" style={styles.drawer.MenuItem.a}>Finance</a></MenuItem>
                    <Divider />
                     <MenuItem onTouchTap={handleToggle} leftIcon={<i className="fa fa-gear"></i>}><a href="#/settings" style={styles.drawer.MenuItem.a}>Settings</a></MenuItem>
                </Drawer>
            </div>
        );

}

const TopBar = () => (
  <div>
  <AppBar
    title={<span style={styles.title}>App Name</span>}
    onLeftIconButtonTouchTap={AppSwitcher.handleToggle}
    iconElementLeft={<IconButton><NavigationMenu /></IconButton>}
    iconElementRight={<FlatButton label="Organization Name"></FlatButton>}
    style={{
      backgroundColor: '#393939'
    }} 
    />
  <AppSwitcher open={AppSwitcher.handleToggle}/>
  </div>
);

export default TopBar;