import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

const TableRecentActivity = () => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>Details</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableRowColumn>You submitted a request for a parking pass.</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>A new form approval request was generated.</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>A new event request was submitted.</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Bake Sale form is awaiting your approval.</TableRowColumn>
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
        title="Activity Feed"
      />
      <CardText>
        <TableRecentActivity />
      </CardText>
    </Card>
  </div>
  );

export default Activity;
