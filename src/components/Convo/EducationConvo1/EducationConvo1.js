import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../Nav/Nav';

const mapStateToProps = state => ({
    user: state.user,
  });
  
  class EducationConvoPage extends Component {
    render() {
      let content = null;
      return (
          <div>
          <p>Does anyone know anything about Prime Digital Academy?</p>
          <Nav />
          { content }
        </div>
      );
    }
  }

export default connect(mapStateToProps)(EducationConvoPage);