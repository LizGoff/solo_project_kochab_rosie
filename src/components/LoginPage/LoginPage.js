import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { triggerLogin, formError, clearError } from '../../redux/actions/loginActions';
import { USER_ACTIONS } from '../../redux/actions/userActions';


const mapStateToProps = state => ({
  user: state.user,
  login: state.login,
});

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    // this.props.dispatch(clearError());
  }

  // This happens after the user logs in
  componentWillReceiveProps(nextProps) {
    if (nextProps.user.userName) {
      // if admin vs not
      console.log(nextProps.user);
      if(nextProps.user.userRole === 'admin' ) {
        this.props.history.push('admin');
      } else {
        this.props.history.push('user');
      }
    }
  }

  login = (event) => {
    event.preventDefault();

    if (this.state.username === '' || this.state.password === '') {
      this.props.dispatch(formError());
    } else {
      this.props.dispatch(triggerLogin(this.state.username, this.state.password));
    }
  }

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  renderAlert() {
    if (this.props.login.message !== '') {
      return (
        <h2
          className="alert"
          role="alert"
        >
          {this.props.login.message}
        </h2>
      );
    }
    return (<span />);
  }

  render() {
    return (
      <div>
        {this.renderAlert()}
        <form onSubmit={this.login}>
          <h1 id='login'>Login</h1>
          <div>
            <label id="username" htmlFor="username">
              Username:
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
              />
            </label>
          </div>
          <div>
            <label id="password" htmlFor="password">
              Password:
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
            </label>
          </div>
          <div>
            <input
              type="submit"
              name="submit"
              value="Log In"
            />
            <Link to="/register">Register</Link>
          </div>
        </form>
        <div>
          <p id="textLoginPage">Rosie's Resistance is a women’s platform for solidarity, to help bring change in our community.
            Rosie’s Resistance helps women connect, reach out, turn to each other for support,
             gives a place to share links, discuss vital issues, share information to support the community,
             learn about our current leaders living Herstory, as well as heroes of our history.
             </p>
          <p id="textLoginPage"> No woman should stand alone.</p>
          <div id="rosie2"></div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(LoginPage);
