import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import UserMenu from 'material-ui/svg-icons/social/person';
import FlatButton from 'material-ui/FlatButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const styles = {
  title: {
    cursor: 'pointer',
  },
};

function saySomething() {
  console.log('something');
}

function handleTouchTap() {
  alert('onTouchTap triggered on the title component');
  saySomething();
}

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    };
    saySomething() {alert('something')};
    
    handleToggle = () => this.setState({open: !this.state.open});

    handleOpen = () => this.seteState({open: !this.state.open});

    handleClose = () => this.setState({open: false});

    render() {
        return (
            <div>
            <FlatButton 
                label="toggle drawer"
                onTouchTap={this.handleToggle} />
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}>
                    <MenuItem onTouchTap={this.handleClose}>Close</MenuItem>
                </Drawer>
            </div>
        );
    }
}

const TopBar = () => (
  <div>
  <AppBar
    title={<span style={styles.title}>Command Center</span>}
    onLeftIconButtonTouchTap={handleTouchTap}
    iconElementLeft={<IconButton><NavigationMenu /></IconButton>}
    iconElementRight={<IconButton><UserMenu /></IconButton>}
  />
  <Nav />
  </div>
);

export default TopBar;