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
      results: []
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    axios.get('/api/education_convo1').then((response) => {
      console.log(response.data[0]);
      this.setState({
        results: response.data
      })
    }).catch((error) => {
      alert('error with GET in EducationSub file');
    })
  }

  sendData = () => {
    console.log('button clicked');
    axios.post('/api/education_convo1', this.state).then((response) => {
      console.log('success');
      this.fetchData();

    }).catch((error) => {
      alert('POST error in EducationSub file');
      console.log(error);
    });
  }

  dataDelete = id => {
    console.log(this.state.results);
    const deletion = `/api/education_convo1/${id}`
    axios.delete(deletion).then((response) => {
      this.fetchData();
      console.log('success with delete!');
    }).catch((error) => {
      alert('There was a problem with DELETE Convo')
    })
  }

  // addEdit = (item) => {
  //   console.log('adding edit', item);
  //   axios.put(`/api/education_convo1/${item.id}`)

  //     .then((response) => {
  //       console.log('put response', response);
  //       this.fetchData();
  //     })
  //     .catch((error) => {
  //       console.log('put/add error in addEdit', error);
  //     });
  // }

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
              <Table id="tableComments">

                <TableHead>
                  <TableRow>
                    <TableCell>Comments</TableCell>
                    <TableCell>Delete</TableCell>
                    <TableCell>Edit</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {this.state.results.map((comments, i) => (
                    <TableRow key={i}>
                      <TableCell>{comments.comment}</TableCell>
                      <TableCell><Button id="deleteButton" onClick={(() => this.dataDelete(comments.id))} variant="outlined" size="small">Delete</Button></TableCell>
                      <TableCell><Button id="editButton" onClick={this.addEdit} variant="outlined" size="small">Edit</Button></TableCell>
                    </TableRow>
                  ))}

                </TableBody>
              </Table>
            </Paper>

            <TextField
              id="addSubtopic"
              onChange={this.handleSubtopicChange}
              name="comment"
              label="Share your thoughts"
              placeholder="Share here"
              margin="normal"/>

            <Button id="addSubtopicButton" variant="outlined" color="secondary" onClick={this.sendData}>Add Comment</Button>
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
