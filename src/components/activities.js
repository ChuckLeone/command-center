import React from 'react';
import {Card, CardHeader, CardMedia, CardTitle, CardText, CardActions} from 'material-ui/Card';

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

const TablePendingActions = () => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>ID</TableHeaderColumn>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Status</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableRowColumn>1</TableRowColumn>
        <TableRowColumn>John Smith</TableRowColumn>
        <TableRowColumn>Employed</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>2</TableRowColumn>
        <TableRowColumn>Randal White</TableRowColumn>
        <TableRowColumn>Unemployed</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>3</TableRowColumn>
        <TableRowColumn>Stephanie Sanders</TableRowColumn>
        <TableRowColumn>Employed</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>4</TableRowColumn>
        <TableRowColumn>Steve Brown</TableRowColumn>
        <TableRowColumn>Employed</TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
);

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
  button: {
    margin: 12,
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
};

class Activity extends React.Component {
    render() {
        return (      
        <div>         
            <Card>
                <CardTitle
                    title="Activity Feed" />
                 <CardText>  
                    <TableRecentActivity />
                </CardText>
            </Card>
        </div>
        );
    }
}

export default Activity;