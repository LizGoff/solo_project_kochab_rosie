import React, { Component } from 'react';
import { connect } from 'react-redux';


import Nav from '../../Nav/Nav';

import { USER_ACTIONS } from '../../../redux/actions/userActions';
import { triggerLogout } from '../../../redux/actions/loginActions';



import Button from '@material-ui/core/Button';


const mapStateToProps = state => ({
  user: state.user,
});

class EducationPage extends Component {

  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  logout = () => {
    this.props.dispatch(triggerLogout());
    // this.props.history.push('home');
  }

  sendUserToCorrespondingPage = (urlString) => {
    return () => {
      this.props.history.push(urlString);
    }
  };


  render() {
    let content = null;

    if (this.props.user.userName) {
      content = (
        <div>
          <h1
            id="welcome"
          >
            Welcome, {this.props.user.userName}
          </h1>
          <button id="logout"
            onClick={this.logout}
          >
            Log Out
          </button>
          <div>

            <Button id="educationConvo" variant="raised" onClick={this.sendUserToCorrespondingPage('/education/convo1')}>Education</Button>
            <Button id="educationConvo" variant="raised" onClick={this.sendUserToCorrespondingPage('/education/convo2')}>Education</Button>
            <Button id="educationConvo" variant="raised" onClick={this.sendUserToCorrespondingPage('/education/convo3')}>Education</Button>
            <Button id="educationConvo" variant="raised" onClick={this.sendUserToCorrespondingPage('/education/convo4')}>Education</Button>
            <Button id="educationConvo" variant="raised" onClick={this.sendUserToCorrespondingPage('/education/convo5')}>Education</Button>
            <Button id="educationConvo" variant="raised" onClick={this.sendUserToCorrespondingPage('/education/convo6')}>Education</Button>
            <Button id="educationConvo" variant="raised" onClick={this.sendUserToCorrespondingPage('/education/convo7')}>Education</Button>
            <Button id="educationConvo" variant="raised" onClick={this.sendUserToCorrespondingPage('/education/convo8')}>Education</Button>
            <Button id="educationConvo" variant="raised" onClick={this.sendUserToCorrespondingPage('/education/convo9')}>Education</Button>

          </div>
        </div>
      );
    }

    return (
      <div>
        <Nav />
        {content}
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(EducationPage);

