import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../Nav/Nav';

const mapStateToProps = state => ({
    user: state.user,
  });
  
  class WomenLivingHerstoryPage extends Component {
    render() {
      let content = null;
      return (
          <div>
          <p>Women Living Herstory</p>
          <Nav />
          { content }
        </div>
      );
    }
  }

export default connect(mapStateToProps)(WomenLivingHerstoryPage);