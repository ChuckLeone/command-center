import React from 'react';
import AppSwitcherBar from './AppSwitcher';
import SiteHeader from './SiteHeader';
import { List, ListItem, makeSelectable } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

class OrgList extends React.Component {

  render() {
    return (
      <div>
        <List>
            <ListItem><a href="/apiary-club">Apiary Club</a></ListItem>
        </List>
      </div>
    );
  }
}

export default OrgList;
