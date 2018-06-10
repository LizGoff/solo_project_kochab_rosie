import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Nav from '../../Nav/Nav';

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

class EducationSub extends Component {

  constructor(props) {
    super(props);
    this.state = {
      comments: []
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    axios.get('/api/education_convo1').then((response) => {
      console.log(response.data[0]);
      this.setState({
        comments: response.data
      })
    }).catch((error) => {
      alert('error with GET in EducationSub file');
    })
  }

  sendData = () => {
    console.log('button clicked');
    axios.post('/api/education_convo1', this.state).then((response) => {
      console.log('success');

    }).catch((error) => {
      alert('POST error in EducationSub file');
      console.log(error);
    });
  }

  sendDataToDelete = id => {
    const deletion = `/api/education_convo1/${id}`
    axios.delete(deletion).then((response) => {
      this.fetchData();
      console.log('success with delete!');
      // const action = { type: 'DELETE' }
      // this.props.dispatch(action);
    }).catch((error) => {
      alert('There was a problem with DELETE Convo')
    })
  }


  // sendUserToCorrespondingPage = (urlString) => {
  //   return () => {
  //     this.props.history.push(urlString);
  //   }
  // };

  handleSubtopicChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    let content = null

    if (this.props) {
      content = (
        <div>
          {this.props.data}
          <div>
            <Paper>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Comments</TableCell>
                    <TableCell>Delete</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.comments.map((taco, i) => (
                    <TableRow key={i}>
                      <TableCell>{taco.comments}</TableCell>
                      <TableCell><Button onClick={(() => this.sendDataToDelete(taco.id))} variant="outlined" color="secondary">Delete</Button></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>

            <TextField
              id="addSubtopic"
              onChange={this.handleSubtopicChange}
              name="comment"
              label="Add comment"
              placeholder="comment"
              margin="normal" />

            <Button id="addSubtopicButton" variant="outlined" color="secondary" onClick={this.sendData}>Add comment</Button>
          </div>
        </div >
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

export default connect(mapReduxStateToProps)(EducationSub);
