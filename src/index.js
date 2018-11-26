import React from 'react';
import PropTypes from 'prop-types';


export default class DisplayObject extends React.Component {
	constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
  	return <pre>{JSON.stringify(this.props.data, undefined, 2)}</pre>;
  }
}

// Proptypes
DisplayObject.propTypes = {
  data: PropTypes.object.isRequired
};

// Default proptypes
DisplayObject.defaultProps = {
  
};
