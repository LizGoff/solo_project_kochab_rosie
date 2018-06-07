import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../Nav/Nav';
// import { USER_ACTIONS } from '../../redux/actions/userActions';

const mapStateToProps = state => ({
    user: state.user,
  });
  
  class WomensHistoryPage extends Component {
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

export default connect(mapStateToProps)(WomensHistoryPage);