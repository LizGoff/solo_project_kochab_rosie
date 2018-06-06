import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../components/Nav/Nav';
// import TopicsPage from '../../components/TopicsPage/TopicsPage';

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
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  logout = () => {
    this.props.dispatch(triggerLogout());
    // this.props.history.push('home');
  }

  sendUserToPoliticsPage = () => {
    this.props.history.push('/politics');
  }

  sendUserToWomenInHistoryPage = () => {
    this.props.history.push('/women_in_history');
  }

  sendUserToWomenLivingHerstoryPage = () => {
    this.props.history.push('/women_in_herstory');
  }

  sendUserToOurStoryPage = () => {
    this.props.history.push('/our_story');
  }

  sendUserToTechPage = () => {
    this.props.history.push('/technology');
  }

  sendUserToEducationPage = () => {
    this.props.history.push('/education');
  }

  sendUserToHealthPage = () => {
    this.props.history.push('/health');
  }

  sendUserToSciencePage = () => {
    this.props.history.push('/health');
  }


  render() {
    let content = null;

    if (this.props.user.userName) {
      content = (
        <div>
          <h1
            id="welcome"
          >
            Welcome, {this.props.user.userName}!
          </h1>
          <button id="logout"
            onClick={this.logout}
          >
            Log Out
          </button>
          <div>
            <Button id="inHistory" variant="raised" onClick={this.sendUserToWomenInHistoryPage}>Women In Our History</Button>
            <Button id="ourStory" variant="raised" onClick={this.sendUserToOurStoryPage}>Our History</Button>
            <Button id="inHerstory" variant="raised" onClick={this.sendUserToWomenLivingHerstoryPage}>Women Living HerStory</Button>
            <Button id="education" variant="raised" onClick={this.sendUserToEducationPage}>Education</Button>
            <Button id="politics" variant="raised" onClick={this.sendUserToPoliticsPage}>Politics</Button>
            <Button id="tech" variant="raised" onClick={this.sendUserToTechPage}>Technology</Button>
            <Button id="science" variant="raised" onClick={this.sendUserToSciencePage}>Science</Button>
            <Button id="health" variant="raised" onClick={this.sendUserToHealthPage}>Health</Button>


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

