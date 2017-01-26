import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Widgets from './Widgets';
import PendingActions from './PendingActions';
import RecentActivity from './RecentActivity';

const styles = {
  page: {
    margin: '20px',
    textAlign: 'left',
    height: '100%',
    left: {
      float: 'left',
      height: '100%',
      width: '20%',
      backgroundColor: '#f1f1f1',
      margin: '-20px',
    },
    right: {
      float: 'right',
      width: '80%',
    },
  },
  icons: {
    marginLeft: '25px',
    marginTop: '15px',
  },
  List: {
    height: '100%',
  },
  listItem: {
    marginLeft: '-5px',
    active: {
      backgroundColor: 'white',
      borderLeft: '4px solid YellowGreen',
    },
  },
};

class Nav extends React.Component {
  render() {
    return (
      <List style={styles.List}>
        <ListItem style={styles.listItem.active} leftIcon={<i className="fa fa-dashboard" style={styles.icons} />}>Dashboard</ListItem>
        <ListItem style={styles.listItem} leftIcon={<i className="fa fa-flag" style={styles.icons} />}>My Involvement</ListItem>
      </List>
    );
  }
}

const Home = () => (
  <div style={styles.page}>
    <div style={styles.page.left}>
      <Nav />
    </div>
    <div style={styles.page.right}>
      <Widgets />
      <br />
      <PendingActions />
      <br />
      <RecentActivity />
    </div>
  </div>
  );

export default Home;
