import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  MasterNav: {
    color: 'white',
    marginLeft: '20px',
  },
  icon: {
    color: 'white',
    padding: '20px',
    marginLeft: '20px',
    verticalAlign: 'middle',
  },
};

const MasterNav = () => (
  <div>
    <IconMenu
      iconButtonElement={<FlatButton label="Command Center" style={styles.MasterNav}>
        <i className="fa fa-ellipsis-v" label="Command Center" style={styles.MasterNav.icon} />
      </FlatButton>}
      anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
      targetOrigin={{ horizontal: 'left', vertical: 'top' }}
    >
      <MenuItem primaryText="UB Linked Home" />
      <MenuItem primaryText="Command Center" />
      <MenuItem primaryText="Settings" />
    </IconMenu>
  </div>
);

export default MasterNav;
