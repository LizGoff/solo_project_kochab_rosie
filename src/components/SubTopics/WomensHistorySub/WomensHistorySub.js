import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../Nav/Nav';
// TO DO
// Add bios
const mapStateToProps = state => ({
    user: state.user,
  });
  
  class WomensHistorySub extends Component {
    render() {
      let content = null;
      return (
          <div>
          <p>Women in our history</p>
          <Nav />
          { content }
        </div>
      );
    }
  }

export default connect(mapStateToProps)(WomensHistorySub);