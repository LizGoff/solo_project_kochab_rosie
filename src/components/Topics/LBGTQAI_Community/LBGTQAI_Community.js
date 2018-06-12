import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../Nav/Nav';
import { USER_ACTIONS } from '../../../redux/actions/userActions';
import Button from '@material-ui/core/Button';

const mapStateToProps = state => ({
  user: state.user, 
});

class LgbtqiPage extends Component {

  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
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
          Thank you for joining the conversation {this.props.user.userName}.
          </h1>
          <h2>LBGTQI</h2>
          <div>

            <Button id="convoTopic" variant="raised" onClick={this.sendUserToCorrespondingPage('/lbgtqi_convo1')}>?</Button>
            <Button id="convoTopic" variant="raised" onClick={this.sendUserToCorrespondingPage('/lbgtqi_convo2')}>?</Button>
            <Button id="convoTopic" variant="raised" onClick={this.sendUserToCorrespondingPage('/lbgtqi_convo3')}>?</Button>
            <Button id="convoTopic" variant="raised" onClick={this.sendUserToCorrespondingPage('/lbgtqi_convo4')}>?</Button>
            <Button id="convoTopic" variant="raised" onClick={this.sendUserToCorrespondingPage('/lbgtqi_convo5')}>?</Button>
            <Button id="convoTopic" variant="raised" onClick={this.sendUserToCorrespondingPage('/lbgtqi_convo6')}>?</Button>
            <Button id="convoTopic" variant="raised" onClick={this.sendUserToCorrespondingPage('/lbgtqi_convo7')}>?</Button>
            <Button id="convoTopic" variant="raised" onClick={this.sendUserToCorrespondingPage('/lbgtqi_convo8')}>?</Button>
            <Button id="convoTopic" variant="raised" onClick={this.sendUserToCorrespondingPage('/lbgtqi_convo9')}>?</Button>

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
export default connect(mapStateToProps)(LgbtqiPage);

