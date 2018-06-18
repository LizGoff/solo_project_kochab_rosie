import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { USER_ACTIONS } from '../../redux/actions/userActions';


import Nav from '../../components/Nav/Nav';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const mapStateToProps = state => ({
  user: state.user,
});

class ResourcePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resourceHelp: [],

    }
  }

  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });

    this.fetchResourceData();
    this.setState({
      topic: this.props.match.params.id
    })
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  fetchResourceData() {
    axios.get(`/api/resource`).then((response) => {
      console.log(response.data[0]);
      this.setState({
        resourceHelp: response.data,
      })
    }).catch((error) => {
      alert('error with GET in addResource file');
    })
  }

  sendResourceData = () => {
    console.log('button for resources clicked');
    axios.post('/api/resource', this.state).then((response) => {
      console.log('success with resource');
      this.fetchResourceData();

    }).catch((error) => {
      alert('POST error in addResource file');
      console.log(error);
    });
  }

  handleResourceChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    let content = null

    if (this.props.user.userName) {
      content = (
        <div>

          <h1 id="welcome">
            Thank you for joining the conversation, {this.props.user.userName}!
          </h1>

          <div>
            <h2>Resources</h2>
          </div>

          <div>
            <ul id="tableResources">
              {this.state.resourceHelp.map((linkToUrl, i) => (
                <li key={i}>
                  <span><strong>{linkToUrl.name}</strong>; {linkToUrl.url}</span>
                  </li>))}
            </ul>
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
      
      export default connect(mapStateToProps)(ResourcePage);
