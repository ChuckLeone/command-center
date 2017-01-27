import React from 'react';
import { browserHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import { Menu, MenuItem } from 'material-ui/Menu';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';

const styles = {
  avatar: {
      margin: '10px'
  },
  title: {
    cursor: 'pointer',
    float: 'left',
    fontSize: '16px'
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

class AppSwitcherBar extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
            items: {open: false}, 
        };
      };
      
     

      handleToggle = () => this.setState({open: !this.state.open});

      handleOpen = () => this.setState({open: !this.state.open});

      handleClose = () => this.setState({open: false});

     handleChangeApp(title, path) {
         this.setState({title, open: false});
        setTimeout(() => browserHistory.push(path));
     }
      render() {
        const { title = 'home' } = this.state || {};

        return (
            <div>
                <AppBar
                title={<span style={styles.title}>{title}</span>}
                onLeftIconButtonTouchTap={this.handleToggle}
                iconElementLeft={<IconButton><NavigationMenu /></IconButton>}
                iconElementRight={<FlatButton label="Organization Name"></FlatButton>}
                style={{
                    backgroundColor: '#393939'
                }} 
                />
                <Drawer
                        docked={false}
                        width={300}
                        onRequestChange={(open) => this.setState({open})} 
                        open={this.state.open}
                        style={styles.drawer}>
                        <AppBar style={styles.drawer.title} title="Command Center" />
                        <Menu>
                            <MenuItem onTouchTap={()=> this.handleChangeApp('Home', '/')} leftIcon={<FontIcon className="fa fa-home" />}>Home</MenuItem>
                            <MenuItem onTouchTap={()=> this.handleChangeApp('Roster', '/roster')} leftIcon={<FontIcon className="fa fa-user-plus" />}>Roster</MenuItem>
                            <MenuItem onTouchTap={()=> this.handleChangeApp('About', '/about')} leftIcon={<FontIcon className="fa fa-info" />}>About</MenuItem>
                            <MenuItem onTouchTap={()=> this.handleChangeApp('Events', '/events')} leftIcon={<FontIcon className="fa fa-calendar" />}>Events</MenuItem>
                            <MenuItem onTouchTap={()=> this.handleChangeApp('News', '/news')} leftIcon={<FontIcon className="fa fa-newspaper-o" />}>News</MenuItem>
                            <MenuItem onTouchTap={()=> this.handleChangeApp('Gallery', '/gallery')} leftIcon={<FontIcon className="fa fa-image" />}>Gallery</MenuItem>
                            <MenuItem onTouchTap={()=> this.handleChangeApp('Documents', '/documents')} leftIcon={<FontIcon className="fa fa-file-text-o" />}>Documents</MenuItem>
                            <MenuItem onTouchTap={()=> this.handleChangeApp('Forms', '/forms')} leftIcon={<FontIcon className="fa fa-files-o" />}>Forms</MenuItem>
                            <MenuItem onTouchTap={()=> this.handleChangeApp('Service Hours', '/service-hrs')} leftIcon={<FontIcon className="fa fa-hourglass-3" />}>Service Hours</MenuItem>
                            <MenuItem onTouchTap={()=> this.handleChangeApp('Elections', '/elections')} leftIcon={<FontIcon className="fa fa-gavel" />}>Elections</MenuItem>
                            <MenuItem onTouchTap={()=> this.handleChangeApp('Finance', '/finance')} leftIcon={<FontIcon className="fa fa-money" />}>Finance</MenuItem>
                            <Divider />
                            <MenuItem onTouchTap={()=> this.handleChangeApp('Settings', '/settings')}leftIcon={<FontIcon className="fa fa-gear" />}>Settings</MenuItem>
                        </Menu>
                    </Drawer>
            </div>
        )
      };

}

export default AppSwitcherBar;