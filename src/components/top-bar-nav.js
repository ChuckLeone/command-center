import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import FlatButton from 'material-ui/FlatButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const styles = {
  title: {
    cursor: 'pointer',
    float: 'left'
  },
};

class TopBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    };
    
    handleToggle = () => this.setState({open: !this.state.open});

    handleOpen = () => this.seteState({open: !this.state.open});

    handleClose = () => this.setState({open: false});

    render() {
        return (
            <div>
            <AppBar
                title={<span style={styles.title}>App Name</span>}
                onLeftIconButtonTouchTap={this.handleToggle}
                iconElementLeft={<IconButton><NavigationMenu /></IconButton>}
                iconElementRight={<FlatButton label="Organization Name" />}
                style={{
                    backgroundColor: '#393939'
                }} />
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})} 
                    style={{
                        backgroundColor: '#eaeaea',
                        textAlign: 'left'
                    }}>
                    <List>
                    <ListItem
                    style={{
                        backgroundColor: '#787878',
                        color: '#ffffff'
                    }}>Organization Name</ListItem>
                    <ListItem onTouchTap={this.handleClose} primaryText="Roster" leftIcon={<i className="fa fa-user-plus"></i>}></ListItem>
                    <ListItem onTouchTap={this.handleClose} primaryText="About" leftIcon={<i className="fa fa-info"></i>}></ListItem>
                    <ListItem onTouchTap={this.handleClose} primaryText="Calendar" leftIcon={<i className="fa fa-calendar"></i>}></ListItem>
                    <ListItem onTouchTap={this.handleClose} primaryText="News" leftIcon={<i className="fa fa-newspaper-o"></i>}></ListItem>
                    <ListItem onTouchTap={this.handleClose} primaryText="Gallery" leftIcon={<i className="fa fa-image"></i>}></ListItem>
                    <ListItem onTouchTap={this.handleClose} primaryText="Documents" leftIcon={<i className="fa fa-file-text-o"></i>}></ListItem>
                    <ListItem onTouchTap={this.handleClose} primaryText="Forms" leftIcon={<i className="fa fa-files-o"></i>}></ListItem>
                    <ListItem onTouchTap={this.handleClose} primaryText="Service Hours" leftIcon={<i className="fa fa-hourglass-3"></i>}></ListItem>
                    <ListItem onTouchTap={this.handleClose} primaryText="Elections" leftIcon={<i className="fa fa-gavel"></i>}></ListItem>
                    <ListItem onTouchTap={this.handleClose} primaryText="Finance" leftIcon={<i className="fa fa-money"></i>}></ListItem>
                    </List>
                </Drawer>
            </div>
        );
    }
}

export default TopBar;