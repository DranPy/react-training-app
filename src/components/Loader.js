import React, { Component } from 'react';
import { List as ListLoader } from 'react-content-loader';

class Loader extends Component {
  render() {
    return (
      <div className="loader text-center">
        <ListLoader {...this.props} />
      </div>
    );
  }
}

export default Loader;
