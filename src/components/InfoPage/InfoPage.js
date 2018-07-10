import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../components/Nav/Nav';
import { USER_ACTIONS } from '../../redux/actions/userActions';

const mapStateToProps = state => ({
  user: state.user,
});

class InfoPage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null || this.props.user.userRole !== 'admin') {
      this.props.history.push('home');
    }
  }

  render() {
    let content = null;
    if (this.props.user.userName) {
      content = (
        <div>
          <h1 id="welcome">
            Welcome, {this.props.user.userName}
          </h1>
          <h2>Our Story</h2>
          <p id="textOurStory">Rosie's Resistance is a women’s platform for solidarity, to help bring change in our community.
            Rosie’s Resistance helps women connect, reach out, turn to each other for support,
             gives a place to share links, discuss vital issues, share information to support the community,
             learn about our current leaders living Herstory, as well as heroes of our history.
             </p>

          <p id="textOurStory"> No woman should stand alone.</p>
          <div id="rosie"></div>
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

export default connect(mapStateToProps)(InfoPage);