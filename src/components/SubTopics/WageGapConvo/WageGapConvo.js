import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../Nav/Nav';
// import { USER_ACTIONS } from '../../redux/actions/userActions';

const mapStateToProps = state => ({
    user: state.user,
  });
  
  class WageGapPage extends Component {
    render() {
      let content = null;
      return (
          <div>
          <p>The Wage Gap</p>
          <Nav />
          { content }
        </div>
      );
    }
  }

export default connect(mapStateToProps)(WageGapPage);