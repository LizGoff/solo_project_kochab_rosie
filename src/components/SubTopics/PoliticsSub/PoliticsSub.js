import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../Nav/Nav';
// import { USER_ACTIONS } from '../../redux/actions/userActions';

const mapStateToProps = state => ({
    user: state.user,
  });
  
  class PoliticsSub extends Component {
    // componentDidMount() {
    //   this.props.dispatch({type: USER_ACTIONS.FETCH_USER});
    // }
  
    // componentDidUpdate() {
    //   if (!this.props.user.isLoading && this.props.user.userName === null) {
    //     this.props.history.push('home');
    //   }
    // }
  
    render() {
      let content = null;
  
    //   if (this.props.user.userName) {
    //     content = (
    //       <div>
    //         <p>
    //           Info Sub
    //         </p>
    //       </div>
    //     );
    //   }
  
      return (
          <div>
          <p>Politics</p>

          <Nav />
          { content }
        </div>
      );
    }
  }

export default connect(mapStateToProps)(PoliticsSub);