import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../Nav/Nav'; 
import { USER_ACTIONS } from '../../../redux/actions/userActions';
import Button from '@material-ui/core/Button';

const mapStateToProps = state => ({
  user: state.user,
});

class EndingViolencePage extends Component {
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
          <h2>Ending Violence Against Women</h2>
          <div>

            <Button id="endingViolenceConvo" variant="raised" onClick={this.sendUserToCorrespondingPage('/ending_violence_convo1')}>What can we do to end violence against women?</Button>
            <Button id="endingViolenceConvo" variant="raised" onClick={this.sendUserToCorrespondingPage('/ending_violence_convo2')}>Does anyone know of any women's shelters in Wisconsin?</Button>
            <Button id="endingViolenceConvo" variant="raised" onClick={this.sendUserToCorrespondingPage('/ending_violence_convo3')}>What are the consequences of violence for women and societies?</Button>
            <Button id="endingViolenceConvo" variant="raised" onClick={this.sendUserToCorrespondingPage('/ending_violence_convo4')}>What's the role of social media and new technologies in mobilizing people to end violence?</Button>
            <Button id="endingViolenceConvo" variant="raised" onClick={this.sendUserToCorrespondingPage('/ending_violence_convo5')}>How many women and girls are victims of violence worldwide?</Button>
            <Button id="endingViolenceConvo" variant="raised" onClick={this.sendUserToCorrespondingPage('/ending_violence_convo6')}>How does abuse affect women of low income communities?</Button>
            <Button id="endingViolenceConvo" variant="raised" onClick={this.sendUserToCorrespondingPage('/ending_violence_convo7')}>Where can I get help?</Button>
            <Button id="endingViolenceConvo" variant="raised" onClick={this.sendUserToCorrespondingPage('/ending_violence_convo8')}>Why do women stay with or go back to their abusive partners?</Button>
            <Button id="endingViolenceConvo" variant="raised" onClick={this.sendUserToCorrespondingPage('/ending_violence_convo9')}>What is needed to end and prevent violence against women and girls?</Button>

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
export default connect(mapStateToProps)(EndingViolencePage);

