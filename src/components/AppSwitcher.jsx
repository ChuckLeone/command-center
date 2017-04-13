import React from 'react';
import { browserHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import { Menu, MenuItem } from 'material-ui/Menu';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
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
    marginTop: '64px',
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
  nestedItem: {
      margin: '-10px 0 -10px 40px',
      fontSize: 'smaller',
      color: '#333',
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
                        <AppBar style={styles.drawer.title} title="Organization Title" />
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
                        </Menu>
                        <List>
                            <Subheader>Admin Tools</Subheader>
                            <ListItem primaryText="Organizations" leftIcon={<FontIcon className="fa fa-users" />} 
                                initiallyOpen={false}
                                primaryTogglesNestedList={true}
                                nestedItems={[
                                    <ListItem
                                    key={1}
                                    style={styles.nestedItem}
                                    primaryText="Organization List"
                                    onTouchTap={()=> this.handleChangeApp('Admin Organizations', '/admin/organizations')}
                                    />,
                                    <ListItem
                                    key={2}
                                    style={styles.nestedItem}
                                    primaryText="Registrations"
                                    onTouchTap={()=> this.handleChangeApp('Admin Organizations', '/admin/organizations/registrations')}
                                    />,
                                    <ListItem
                                    key={3}
                                    style={styles.nestedItem}
                                    primaryText="Messaging"
                                    onTouchTap={()=> this.handleChangeApp('Admin Organizations', '/admin/organizations/messaging')}
                                    />,
                                     <ListItem
                                    key={4}
                                    style={styles.nestedItem}
                                    primaryText="Text Messaging"
                                    onTouchTap={()=> this.handleChangeApp('Admin Organizations', '/admin/organizations/text-messaging')}
                                    />,
                                     <ListItem
                                    key={5}
                                    style={styles.nestedItem}
                                    primaryText="Organization Tree"
                                    onTouchTap={()=> this.handleChangeApp('Admin Organizations', '/admin/organizations/organization-tree')}
                                    />,
                                     <ListItem
                                    key={6}
                                    style={styles.nestedItem}
                                    primaryText="Settings"
                                    onTouchTap={()=> this.handleChangeApp('Admin Organizations', '/admin/organizations/settings')}
                                    />,
                                ]} />
                            <ListItem primaryText="Events" leftIcon={<FontIcon className="fa fa-calendar" />} 
                                    initiallyOpen={false}
                                    primaryTogglesNestedList={true}
                                    nestedItems={[
                                        <ListItem
                                        key={1}
                                        style={styles.nestedItem}
                                        primaryText="Event List"
                                        onTouchTap={()=> this.handleChangeApp('Admin Events', '/admin/events/event-list')} 
                                        />,
                                        <ListItem
                                        key={2}
                                        style={styles.nestedItem}
                                        primaryText="Settings"
                                        onTouchTap={()=> this.handleChangeApp('Admin Events', '/admin/events/settings')}
                                        />,
                                ]} />
                            <ListItem primaryText="Users" leftIcon={<FontIcon className="fa fa-user" />} 
                                    initiallyOpen={false}
                                    primaryTogglesNestedList={true}
                                    nestedItems={[
                                        <ListItem
                                        key={1}
                                        style={styles.nestedItem}
                                        primaryText="User List"
                                        onTouchTap={()=> this.handleChangeApp('Admin Users', '/admin/users/user-list')} 
                                        />,
                                         <ListItem
                                        key={2}
                                        style={styles.nestedItem}
                                        primaryText="Past Involvements"
                                        onTouchTap={()=> this.handleChangeApp('Admin Users', '/admin/users/past-involvements')} 
                                        />,
                                         <ListItem
                                        key={3}
                                        style={styles.nestedItem}
                                        primaryText="Experiences"
                                        onTouchTap={()=> this.handleChangeApp('Admin Users', '/admin/users/experiences')} 
                                        />,
                                         <ListItem
                                        key={4}
                                        style={styles.nestedItem}
                                        primaryText="Outcomes"
                                        onTouchTap={()=> this.handleChangeApp('Admin Users', '/admin/users/outcomes')} 
                                        />,
                                         <ListItem
                                        key={5}
                                        style={styles.nestedItem}
                                        primaryText="Experience Imports"
                                        onTouchTap={()=> this.handleChangeApp('Admin Users', '/admin/users/experience-imports')} 
                                        />,
                                         <ListItem
                                        key={6}
                                        style={styles.nestedItem}
                                        primaryText="Involvment Imports"
                                        onTouchTap={()=> this.handleChangeApp('Admin Users', '/admin/users/involvement-imports')} 
                                        />,
                                         <ListItem
                                        key={7}
                                        style={styles.nestedItem}
                                        primaryText="Service Hours"
                                        onTouchTap={()=> this.handleChangeApp('Admin Users', '/admin/users/service-hours')} 
                                        />,
                                        <ListItem
                                        key={8}
                                        style={styles.nestedItem}
                                        primaryText="Settings"
                                        onTouchTap={()=> this.handleChangeApp('Admin Users', '/admin/events/settings')}
                                        />,
                                ]}
                            />
                            <ListItem primaryText="Elections" leftIcon={<FontIcon className="fa fa-gavel" />} 
                                    initiallyOpen={false}
                                    primaryTogglesNestedList={true}
                                    nestedItems={[
                                        <ListItem
                                        key={1}
                                        style={styles.nestedItem}
                                        primaryText="User List"
                                        onTouchTap={()=> this.handleChangeApp('Admin Elections', '/admin/elections/elections-list')} 
                                        />,
                                        <ListItem
                                        key={2}
                                        style={styles.nestedItem}
                                        primaryText="Settings"
                                        onTouchTap={()=> this.handleChangeApp('Admin Elections', '/admin/elections/settings')}
                                        />,
                                ]}
                            />
                            <ListItem primaryText="Finance" leftIcon={<FontIcon className="fa fa-money" />} 
                                    initiallyOpen={false}
                                    primaryTogglesNestedList={true}
                                    nestedItems={[
                                        <ListItem
                                        key={1}
                                        style={styles.nestedItem}
                                        primaryText="Request List"
                                        onTouchTap={()=> this.handleChangeApp('Admin Finance', '/admin/finance/request-list')} 
                                        />,
                                         <ListItem
                                        key={2}
                                        style={styles.nestedItem}
                                        primaryText="Payees"
                                        onTouchTap={()=> this.handleChangeApp('Admin Finance', '/admin/finance/payees')} 
                                        />,
                                         <ListItem
                                        key={3}
                                        style={styles.nestedItem}
                                        primaryText="Accounts"
                                        onTouchTap={()=> this.handleChangeApp('Admin Users', '/admin/finace/acounts')} 
                                        />,
                                         <ListItem
                                        key={4}
                                        style={styles.nestedItem}
                                        primaryText="Account Tree"
                                        onTouchTap={()=> this.handleChangeApp('Admin Users', '/admin/finance/account-tree')} 
                                        />,
                                         <ListItem
                                        key={5}
                                        style={styles.nestedItem}
                                        primaryText="Transaction Imports"
                                        onTouchTap={()=> this.handleChangeApp('Admin Users', '/admin/finace/transaction-imports')} 
                                        />,
                                        <ListItem
                                        key={6}
                                        style={styles.nestedItem}
                                        primaryText="Settings"
                                        onTouchTap={()=> this.handleChangeApp('Admin Users', '/admin/finance/settings')}
                                        />,
                                ]}
                            />
                        </List>
                        
                        <Divider />
                    </Drawer>
            </div>
        )
      };

}

export default AppSwitcherBar;