import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../components/Nav/Nav';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';

import Button from '@material-ui/core/Button';


const mapStateToProps = state => ({
  user: state.user,
});

class UserPage extends Component {

  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && (this.props.user.userName === null)) {
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
          <h1 id="welcome">
            Welcome, {this.props.user.userName}!
          </h1>
          <button id="logout"
            onClick={this.logout}>Log Out</button>
          <div id="topicButtonsPage">

            <Button id="inHistory" variant="raised" onClick={this.sendUserToCorrespondingPage('/women_in_history')}>Women In Our History</Button>
            <Button id="ourStory" variant="raised" onClick={this.sendUserToCorrespondingPage('/info')}>Our History</Button>
            <Button id="inHerstory" variant="raised" onClick={this.sendUserToCorrespondingPage('/women_in_herstory')}>Women Living HerStory</Button>

            <Button id="pride" variant="raised" onClick={this.sendUserToCorrespondingPage('/lgbtqi')}>LGBTQI Community</Button>
            <Button id="wage" variant="raised" onClick={this.sendUserToCorrespondingPage('/wage_gap')}>The Wage Gap</Button>
            <Button id="endingViolence" variant="raised" onClick={this.sendUserToCorrespondingPage('/ending_violence')}>Ending Violence</Button>

            <Button id="science" variant="raised" onClick={this.sendUserToCorrespondingPage('/science')}>Women In Science</Button>
            <Button id="health" variant="raised" onClick={this.sendUserToCorrespondingPage('/health')}>Health</Button>
            <Button id="art" variant="raised" onClick={this.sendUserToCorrespondingPage('/arts')}>Women In The Arts</Button>

            <Button id="education" variant="raised" onClick={this.sendUserToCorrespondingPage('/education')}>Education</Button>
            <Button id="politics" variant="raised" onClick={this.sendUserToCorrespondingPage('/politics')}>Politics</Button>
            <Button id="tech" variant="raised" onClick={this.sendUserToCorrespondingPage('/technology')}>Technology</Button>


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
export default connect(mapStateToProps)(UserPage);

