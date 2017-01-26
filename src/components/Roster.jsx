import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

const styles = {
  page: {
    margin: '20px',
    textAlign: 'left',
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
    marginLeft: '-20px',
    active: {
      backgroundColor: 'white',
      borderLeft: '4px solid YellowGreen',
    },
  },
};

class Officers extends React.Component {
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
      showCheckboxes: true,
      height: '300px',
    };
  }
  render() {
    return (
      <Table>
        <TableHeader  
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}>
          <TableRow>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Position</TableHeaderColumn>
            <TableHeaderColumn>Contact</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody
          displayRowCheckbox={this.state.showCheckboxes}
          deselectOnClickaway={this.state.deselectOnClickaway}
          showRowHover={this.state.showRowHover}
          stripedRows={this.state.stripedRows}
        >
          <TableRow>
            <TableRowColumn>
              <ListItem
                style={styles.listItem}
                leftAvatar={
                  <Avatar src="img/alfred-pennyworth.jpg" />
                }>
                    Alfred Pennyworth
                </ListItem>
              </TableRowColumn>
            <TableRowColumn>President</TableRowColumn>
            <TableRowColumn><a href=""><i className="fa fa-envelope" /></a></TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>
              <ListItem
                style={styles.listItem}
                leftAvatar={
                  <Avatar src="img/selina-kyle.jpg" />
                }>
                    Selina Kyle
              </ListItem>
            </TableRowColumn>
            <TableRowColumn>Vice President</TableRowColumn>
            <TableRowColumn><a href=""><i className="fa fa-envelope" /></a></TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>
              <ListItem
                style={styles.listItem}
                leftAvatar={
                  <Avatar src="img/lucious-fox.jpg" />
                }>
                    Lucious Fox
              </ListItem>
            </TableRowColumn>
            <TableRowColumn>Secretary</TableRowColumn>
            <TableRowColumn><a href=""><i className="fa fa-envelope" /></a></TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
    );
  };
}

class CurrentRoster extends React.Component {
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
      showCheckboxes: true,
      height: '300px',
    };
  }

  render() {
    return (
      <Table>
        <TableHeader 
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}>
          <TableRow>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Member Since</TableHeaderColumn>
            <TableHeaderColumn>Contact</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
        >
          <TableRow>
            <TableRowColumn>
              <ListItem
                style={styles.listItem} 
                leftAvatar={
                  <Avatar src="img/barbar-gordon.jpg" />
                    }>
                    Barbara Gordon
               </ListItem>
            </TableRowColumn>
            <TableRowColumn>11/11/2014</TableRowColumn>
            <TableRowColumn><a href=""><i className="fa fa-envelope" /></a></TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>
            <ListItem
                style={styles.listItem} 
                leftAvatar={
                  <Avatar src="img/bruce-wayne.jpg" />
                    }>
                    Bruce Wayne
               </ListItem></TableRowColumn>
            <TableRowColumn>3/3/2011</TableRowColumn>
            <TableRowColumn><a href=""><i className="fa fa-envelope" /></a></TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>
            <ListItem
                style={styles.listItem} 
                leftAvatar={
                  <Avatar src="img/fish-mooney.jpg" />
                    }>
                    Fish Mooney
               </ListItem>
            </TableRowColumn>
            <TableRowColumn>1/12/2013</TableRowColumn>
            <TableRowColumn><a href=""><i className="fa fa-envelope" /></a></TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn><ListItem
                style={styles.listItem} 
                leftAvatar={
                  <Avatar src="img/james-gordon.jpg" />
                    }>
                    James Gordon
               </ListItem></TableRowColumn>
            <TableRowColumn>5/3/2016</TableRowColumn>
            <TableRowColumn><a href=""><i className="fa fa-envelope" /></a></TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>
              <ListItem
                style={styles.listItem} 
                leftAvatar={
                  <Avatar src="img/edward-nigma.jpg" />
                    }>
                    Edward Nigma
               </ListItem>
            </TableRowColumn>
            <TableRowColumn>5/3/2016</TableRowColumn>
            <TableRowColumn><a href=""><i className="fa fa-envelope" /></a></TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
    )
  }
};

class Nav extends React.Component {
  render() {
    return (
      <List style={styles.List}>
        <ListItem style={styles.listItem.active} leftIcon={<i className="fa fa-users" style={styles.icons} />}>Manage Roster</ListItem>
        <ListItem leftIcon={<i className="fa fa-edit" style={styles.icons} />}>Manage Positions</ListItem>
        <ListItem leftIcon={<i className="fa fa-user-plus" style={styles.icons} />}>Invite Members</ListItem>
        <ListItem leftIcon={<i className="fa fa-envelope" style={styles.icons} />}>Message All Members</ListItem>
      </List>
    );
  }
}

class Roster extends React.Component {
  render() {
    return (
      <div style={styles.page}>
        <div style={styles.page.left}>
          <Nav />
        </div>
        <div style={styles.page.right}>
          <Card>
            <CardTitle
              title="Officers"
            />
            <CardText>
              <Officers />
            </CardText>
          </Card>
          <br />
          <Card>
            <CardTitle
              title="Members"
            />
            <CardText>
              <CurrentRoster />
            </CardText>
          </Card>
        </div>
      </div>
    );
  }
}

export default Roster;
