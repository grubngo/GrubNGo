import React from 'react';
import { Card, Image, Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Vendor extends React.Component {
  render() {
    return (
        <Card centered>
          <Card.Content>
            <Image floated='right' size='mini' src={this.props.vendor.image}/>
            <Card.Header>
              {this.props.vendor.menu}
            </Card.Header>
            <Table.Columns>
              <Table.Cell>{this.props.vendor.item}</Table.Cell>
            </Table.Columns>
          <Card.Content extra>
            <Link to={`/edit/${this.props.vendor._id}`}>Edit</Link>
          </Card.Content>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
Vendor.propTypes = {
  vendor: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Vendor);
