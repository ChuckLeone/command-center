import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
    button: {
        color: 'white',
        marginRight: '20px',
        a: {
            color: 'white'
        },
    }
};

class Widgets extends React.Component {
  render () {
        return (
        <div>
            <Card>
            <CardTitle title="Widgets" />
            <CardText>
                <RaisedButton
                href="/roster"
                label="Invite Users"
                primary={true}
                style={styles.button}
                icon={<i className="fa fa-user-plus" style={styles.button.a} />} />

                <RaisedButton
                href="/events"
                label="Create an Event"
                primary={true}
                style={styles.button}
                icon={<i className="fa fa-calendar" style={styles.button.a} />} />

                <RaisedButton
                href="/news"
                label="Create a News Article"
                primary={true}
                style={styles.button}
                icon={<i className="fa fa-newspaper-o" style={styles.button.a} />} />

                <RaisedButton
                href="/gallery"
                label="Upload a Photo"
                primary={true}
                style={styles.button}
                icon={<i className="fa fa-image" style={styles.button.a} />} />
                   
            </CardText>
            </Card>
        </div>
        )
  }
};

export default Widgets;