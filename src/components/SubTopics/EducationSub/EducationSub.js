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
      results: [],
      comment: '',
      topic: 4,
      subtopic: 6,
      resourceHelp: []
    }
  }

  componentDidMount() {
    this.fetchData();
    this.fetchResourceData();
  }

  fetchData() {
    axios.get(`/api/conversation/${6}`).then((response) => {
      console.log(response.data[0]);
      this.setState({
        results: response.data,
        comment: '',
      })
    }).catch((error) => {
      alert('error with GET in EducationSub file');
    })
  }

  handleSubtopicChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  sendData = () => {
    console.log('button clicked');
    axios.post('/api/conversation', this.state).then((response) => {
      console.log('success');
      this.fetchData();

    }).catch((error) => {
      alert('POST error in EducationSub file');
      console.log(error);
    });
  }

  dataDelete = id => {
    console.log(this.state.results);
    const deletion = `/api/conversation/${id}`
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
            <div>
              <TextField
                id="addSubtopic"
                onChange={this.handleSubtopicChange}
                name="comment"
                value={this.state.comment}
                label="Share your thoughts"
                placeholder="Share here"
                margin="normal" />
              <Button id="addSubtopicButton" variant="outlined" color="secondary" onClick={this.sendData}>Add Comment</Button>
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