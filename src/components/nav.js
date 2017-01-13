import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
// import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    }
    handleToggle = () => this.setState({open: !this.state.open});

    handleOpen = () => this.seteState({open: !this.state.open});

    handleClose = () => this.setState({open: false});

    render() {
        return (
            <div>
            <RaisedButton 
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

export default Nav;