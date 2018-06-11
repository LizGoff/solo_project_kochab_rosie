import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Nav from '../../components/Nav/Nav';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const mapReduxStateToProps = (reduxState) => (
  { reduxState }
);

class ResourcePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resourceHelp: []
    }
  }

  componentDidMount() {
    this.fetchResourceData();
  }

  fetchResourceData() {
    axios.get('/api/resource').then((response) => {
      console.log(response.data[0]);
      this.setState({
        resourceHelp: response.data
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

    if (this.props) {
      content = (
        <div>
          <div>
            <h2>
              Resources
          </h2>
          </div>

          <div>
            <TextField
              id="addResource"
              onChange={this.handleResourceChange}
              name="url"
              label="Share resources for women here"
              placeholder="Share url here"
              margin="normal" />

            <Button id="addResourceButton" variant="outlined" color="secondary" onClick={this.sendResourceData}>Add Resource</Button>
          </div>

          <div>
            <Paper>
              <Table id="tableResources">

                <TableHead>
                  <TableRow>
                    <TableCell>Resource Link</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {this.state.resourceHelp.map((linkToUrl, i) => (
                    <TableRow key={i}>
                      <TableCell>{linkToUrl.url}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>

              </Table>
            </Paper>
          </div >
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

export default connect(mapReduxStateToProps)(ResourcePage);