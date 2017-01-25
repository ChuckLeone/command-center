import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import Avatar from 'material-ui/Avatar';

const style = {
  margin: '5px',
  verticalAlign: 'center',

};
class TableRecentActivity extends React.Component {
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
  render() {
    return (
      <Table>
        <TableHeader
          displaySelectAll={this.state.showCheckboxes}
          adjustForCheckbox={this.state.showCheckboxes}
          enableSelectAll={this.state.enableSelectAll}
        >
          <TableRow>
            <TableHeaderColumn>Submitter</TableHeaderColumn>
            <TableHeaderColumn />
            <TableHeaderColumn>Activity</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={this.state.showCheckboxes}>
          <TableRow>
            <TableRowColumn><Avatar src="img/barbara-gordon.jpg" /></TableRowColumn>
            <TableRowColumn>Barbara G</TableRowColumn>
            <TableRowColumn>Submitted a funding request.</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn><Avatar src="img/lucious-fox.jpg" /></TableRowColumn>
            <TableRowColumn>Lucious F</TableRowColumn>
            <TableRowColumn>Requested requested to join this organization.</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn><Avatar style={style} src="img/selina-kyle.jpg" /></TableRowColumn>
            <TableRowColumn>Selina K</TableRowColumn>
            <TableRowColumn>Reviewed an event request.</TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
    );
  }
}

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
