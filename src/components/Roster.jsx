import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import { Card, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import { Table, TableBody, TableHeader, TableFooter, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import { List, ListItem } from 'material-ui/List';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';

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
  button: {
    backgroundColor: '#155eab',
    color: 'white',
    marginRight: '20px',
    a: {
      color: 'white',
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
      selectable: false,
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
          selectable={this.state.selectable}
          displaySelectAll={this.state.showCheckboxes}
          adjustForCheckbox={this.state.showCheckboxes}
          enableSelectAll={this.state.enableSelectAll}
        >
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
                }
              >
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
                }
              >
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
                }
              >
                    Lucious Fox
              </ListItem>
            </TableRowColumn>
            <TableRowColumn>Secretary</TableRowColumn>
            <TableRowColumn><a href=""><i className="fa fa-envelope" /></a></TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
    );
  }
}

class Members extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      showRowHover: false,
      selectable: true,
      multiSelectable: true,
      enableSelectAll: true,
      deselectOnClickaway: true,
      showCheckboxes: true,
      height: '300px',
    };
  }

  render() {
    return (
      <Table
        selectable={this.state.selectable}
        multiSelectable={this.state.multiSelectable}
      >
        <TableHeader
          displaySelectAll={this.state.showCheckboxes}
          adjustForCheckbox={this.state.showCheckboxes}
          enableSelectAll={this.state.enableSelectAll}
        >
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
                  <Avatar src="img/barbara-gordon.jpg" />
                    }
              >
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
                    }
              >
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
                    }
              >
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
                    }
            >
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
                    }
              >
                    Edward Nigma
               </ListItem>
            </TableRowColumn>
            <TableRowColumn>5/3/2016</TableRowColumn>
            <TableRowColumn><a href=""><i className="fa fa-envelope" /></a></TableRowColumn>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableRowColumn />
            <TableRowColumn>
              <FlatButton
                href="/roster/message"
                label="Message Selected Members"
                primary
                style={styles.button}
                icon={<i className="fa fa-envelope" style={styles.button.a} />}
              />
            </TableRowColumn>
            <TableRowColumn>
              <FlatButton
                href="/roster/message"
                label="End Selected Memberships"
                primary
                style={styles.button}
                icon={<i className="fa fa-user-times" style={styles.button.a} />}
              /></TableRowColumn>
          </TableRow>
        </TableFooter>
      </Table>
    );
  }
}

class Nav extends React.Component {
  render() {
    return (
      <List style={styles.List}>
        <ListItem style={styles.listItem.active} leftIcon={<i className="fa fa-users" style={styles.icons} />}>Manage Roster</ListItem>
        <ListItem style={styles.listItem} leftIcon={<i className="fa fa-edit" style={styles.icons} />}>Manage Positions</ListItem>
        <ListItem style={styles.listItem} leftIcon={<i className="fa fa-user-plus" style={styles.icons} />}>Invite Members</ListItem>
        <ListItem style={styles.listItem} leftIcon={<i className="fa fa-envelope" style={styles.icons} />}>Message All Members</ListItem>
      </List>
    );
  }
}

class MemberFilter extends React.Component {
  state = {
    value: 1,
  };

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div>
        <SelectField
          floatingLabelText="Sort By"
          value={this.state.value}
          onChange={this.handleChange}
          >
            <MenuItem value={1} primaryText="Current Members" />
            <MenuItem value={2} primaryText="Pending" />
            <MenuItem value={3} primaryText="Prospective" />
          </SelectField>
      </div>
    );
  }
}

const Roster = () => (
  <div style={styles.page}>
    <div style={styles.page.left}>
      <Nav />
    </div>
    <div style={styles.page.right}>
      <Card>
        <CardHeader
          title="Officers"
          subtitle="Number of officers: 3"
        />
        <CardText>
          <Officers />
        </CardText>
      </Card>
      <br />
      <Card>
      <CardHeader title="Member Roster">
        <MemberFilter />
      </CardHeader> 
        <CardText>
          <Members />
        </CardText>
      </Card>
    </div>
  </div>
);

export default Roster;
