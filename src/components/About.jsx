import React from 'react';
import TextField from 'material-ui/TextField';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';

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

class About extends React.Component {
  render() {
    return (
      <div style={styles.page}>
        <Card>
          <CardTitle
            title="Edit Organization Information"
          />
          <CardText>
            <h2>Description</h2>
            <TextField
              style={styles.TextField}
              floatingLabelText="Summary"
              value="A group of motorcycle enthusiasts based in the Western New York region. "
            />
            <br />
            <TextField
              style={styles.TextField}
              floatingLabelText="Full Description"
              value="A group of motorcycle enthusiasts based in the Western New York region.
              We gather to talk about our machines, ride them and tinker. Join us if you ride
              or simply appreciate these beautiful machines."
            />
          </CardText>
        </Card>
        <br />
        <Card>
          <CardTitle
            title="Contact Information"
          />
          <CardText>
            <p>Please note that the information you enter into the contact fields below will be displayed on your organization's
            public profile page and visible to anyone in or outside of your community.</p>
            <p>In order to avoid potential spam or solicitation messages, you may wish to consider publishing a
            shared organization address, phone number, or email address rather than using your
            personal contact information.</p>
            <TextField
              style={styles.TextField}
              floatingLabelText="Street Address 1"
              value="210 Ellicott St"
            />
            <br />
            <TextField
              style={styles.TextField}
              floatingLabelText="Street Address 2"
              value="Suite 200"
            />
          </CardText>
        </Card>
        <br />
        <Divider />
        <br />
        <FlatButton
          label="Update"
          style={styles.button}

          hoverColor="#4d90fe"
          icon={<i className="fa fa-save" />}
        />
      </div>
    );
  }
}

export default About;
