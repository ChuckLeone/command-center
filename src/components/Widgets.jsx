import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  button: {
    backgroundColor: '#155eab',
    color: 'white',
    marginRight: '20px',
    a: {
      color: 'white',
    },
  },
};

class Widgets extends React.Component {
  render() {
    return (
      <div>
        <Card>
          <CardTitle title="Widgets" />
          <CardText>
            <FlatButton
              href="/roster"
              label="Invite Users"
              primary
              style={styles.button}
              icon={<i className="fa fa-user-plus" style={styles.button.a} />}
            />

            <FlatButton
              href="/events"
              label="Create an Event"
              primary
              style={styles.button}
              icon={<i className="fa fa-calendar" style={styles.button.a} />}
            />

            <FlatButton
              href="/news"
              label="Create a News Article"
              primary
              style={styles.button}
              icon={<i className="fa fa-newspaper-o" style={styles.button.a} />}
            />

            <FlatButton
              href="/gallery"
              label="Upload a Photo"
              primary
              style={styles.button}
              icon={<i className="fa fa-image" style={styles.button.a} />}
            />

          </CardText>
        </Card>
      </div>
    );
  }
}

export default Widgets;
