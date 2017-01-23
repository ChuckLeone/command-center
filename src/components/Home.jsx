import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

const TablePendingActions = () => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>Organization Homepage</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableRow>
      <TableHeaderColumn>Action</TableHeaderColumn>
      <TableHeaderColumn>Details</TableHeaderColumn>
      <TableHeaderColumn>Status</TableHeaderColumn>
    </TableRow>
    <TableBody>
      <TableRow>
        <TableRowColumn>Approval/Review</TableRowColumn>
        <TableRowColumn>Request for funding for a food drive.</TableRowColumn>
        <TableRowColumn>Awaiting Approval</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Review</TableRowColumn>
        <TableRowColumn>Request for alcholol permit.</TableRowColumn>
        <TableRowColumn>Awaiting Review</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Approval/Review</TableRowColumn>
        <TableRowColumn><a href="">Pete W</a> wants to join this organization.</TableRowColumn>
        <TableRowColumn>Awaiting Approval</TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
);


const styles = {
  page: {
    margin: '20px',
    textAlign: 'left',
  },
  TextField: {
    width: '50%',
  },
  button: {
    color: 'white',
    backgroundColor: '#155eab',
  },
};

const Activity = () => (
  <div style={styles.page}>
    <Card>
      <CardTitle
        title="Pending Actions"
      />
      <CardText>
        <TablePendingActions />
      </CardText>
    </Card>
  </div>
  );

export default Activity;
