import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

const TableRecentActivity = () => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>Recent Activity</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableRow>
      <TableHeaderColumn>User</TableHeaderColumn>
      <TableHeaderColumn>Details</TableHeaderColumn>
    </TableRow>
    <TableBody>
      <TableRow>
        <TableRowColumn>John G</TableRowColumn>
        <TableRowColumn>Submitted a funding request.</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Peter F</TableRowColumn>
        <TableRowColumn>Requested requested to join this organization.</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Allison H</TableRowColumn>
        <TableRowColumn>Reviewed an event request.</TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
);


const RecentActivity = () => (
  <div>
    <Card>
      <CardTitle
        title="Recent Activity"
      />
      <CardText>
        <TableRecentActivity />
      </CardText>
    </Card>
  </div>
  );

export default RecentActivity;
