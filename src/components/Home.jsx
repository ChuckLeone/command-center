import React from 'react';
import Widgets from './Widgets';
import PendingActions from './PendingActions';
import RecentActivity from './RecentActivity';
const styles = {
  page: {
    margin: '20px',
    textAlign: 'left',
  },
};

const Home = () => (
  <div style={styles.page}>
    <Widgets />
    <br />
    <RecentActivity />
    <br />
    <PendingActions />
  </div>
  );

export default Home;
