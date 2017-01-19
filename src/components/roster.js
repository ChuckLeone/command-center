import React from 'react';
import {Card, CardHeader, CardMedia, CardTitle, CardText, CardActions} from 'material-ui/Card';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

const Officers = () => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Position</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableRowColumn>John James</TableRowColumn>
        <TableRowColumn>President</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>David Franklin</TableRowColumn>
        <TableRowColumn>Vice President</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Fred Graves</TableRowColumn>
        <TableRowColumn>Secretary</TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
);

const CurrentRoster = () => (
 <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Member Since</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableRowColumn>John Smith</TableRowColumn>
        <TableRowColumn>11/11/2014</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Randal White</TableRowColumn>
        <TableRowColumn>3/3/2011</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Stephanie Sanders</TableRowColumn>
        <TableRowColumn>1/12/2013</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Steve Brown</TableRowColumn>
        <TableRowColumn>5/3/2016</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Harvey Dent</TableRowColumn>
        <TableRowColumn>3/7/2012</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Selina Kyle</TableRowColumn>
        <TableRowColumn>5/12/2013</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Steve Brown</TableRowColumn>
        <TableRowColumn>5/3/2016</TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
);


class Roster extends React.Component {
    render () {
        return (
            <div>        
            <Card>
                <CardTitle
                    title="Officers" />
                 <CardText>  
                    <Officers />
                </CardText>
            </Card> 
            <Card>
                <CardTitle
                    title="Active Members" />
                 <CardText>  
                    <CurrentRoster />
                </CardText>
            </Card>
        </div>
        )
    }
}

export default Roster;