import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const styles = {
    MasterNav: {
        color: 'white'
    }, 
    icon: {
        color: 'white',
        padding: '20px',
        marginLeft: '20px',
        verticalAlign: 'middle'
     }
}

const MasterNav = () => (
  <div>
    <IconMenu
      iconButtonElement={<FlatButton label="Command Center" style={styles.MasterNav}><i className="fa fa-rocket" label="Command Center" style={styles.MasterNav.icon}></i></FlatButton>}
      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
      targetOrigin={{horizontal: 'left', vertical: 'top'}}
    >
      <MenuItem primaryText="UB Linked Home" />
      <MenuItem primaryText="Command Center" />
      <MenuItem primaryText="Settings" />
    </IconMenu>
    </div>
);

export default MasterNav;