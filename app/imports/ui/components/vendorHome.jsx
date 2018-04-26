import React from 'react';
import { Card, Image, Feed } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import Note from '/imports/ui/components/Note';
import AddNote from '/imports/ui/components/AddNote';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class VendorsHome extends React.Component {
  render() {
    return (
        <Card centered>
          <Card.Content>
            <Image floated='right' size='mini' src={this.props.vendor.image}/>
            <Card.Header>
              {this.props.vendor.Name}
            </Card.Header>
            <Card.Meta>
              {this.props.vendor.type}
            </Card.Meta>
            <Card.Description>
              {this.props.vendor.description}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Link to={`/editHomepage/${this.props.vendor._id}`}>Edit</Link>
          </Card.Content>
          <Card.Content extra>
            <Feed>
              {this.props.notes.map((note, index) => <Note key={index} note={note}/>)}
            </Feed>
          </Card.Content>
          <Card.Content extra>
            <AddNote owner={this.props.vendor.owner} vendorId={this.props.vendor._id}/>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
VendorsHome.propTypes = {
  vendor: PropTypes.object.isRequired,
  notes: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(VendorsHome);
