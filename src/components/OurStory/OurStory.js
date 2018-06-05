import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../components/Nav/Nav';
// import { USER_ACTIONS } from '../../redux/actions/userActions';

const mapStateToProps = state => ({
    user: state.user,
  });
  
  class OurStoryPage extends Component {
    render() {
      let content = null;
      return (
          <div>
          <p>Our Story</p>
          <Nav />
          { content }
        </div>
      );
    }
  }

export default connect(mapStateToProps)(OurStoryPage);