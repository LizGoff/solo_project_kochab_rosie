import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../Nav/Nav';
// TO DO
// Add articles and stories
const mapStateToProps = state => ({
    user: state.user,
  });
  
  class WomenLivingHerstorySub extends Component {
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

export default connect(mapStateToProps)(WomenLivingHerstorySub);