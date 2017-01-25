import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

class TablePendingActions extends React.Component {

   constructor(props) {
    super(props);

    this.state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      showRowHover: false,
      selectable: true,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      showCheckboxes: false,
      height: '300px',
    };
  }

  render () { 
    return (
      <Table>
        <TableHeader 
          displaySelectAll={this.state.showCheckboxes}
          adjustForCheckbox={this.state.showCheckboxes}
          enableSelectAll={this.state.enableSelectAll} >
          <TableRow>
            <TableHeaderColumn>Action</TableHeaderColumn>
            <TableHeaderColumn>Detail</TableHeaderColumn>
            <TableHeaderColumn>Status</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody adjustForCheckbox={this.state.showCheckboxes}>
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
    )
  }

}


const PendingActions = () => (
  <div>
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

export default PendingActions;
