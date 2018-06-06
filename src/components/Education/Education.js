import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Nav from '../../components/Nav/Nav';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const mapReduxStateToProps = (reduxState) => (
  { reduxState }
);

class EducationPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      subtopics: [{ subtopic: 'Flying monkeys?' }, { subtopic: 'Flying monkeys are super weird?' }]
    }
  }

  componentDidMount() {
    console.log('component did mount');
    this.fetchData();
  }

  fetchData() {
    axios.get('/api/education').then((response) => {
      console.log(response.data[0]);
      this.setState({
        subtopics: response.data
      })
    }).catch((error) => {
      alert('error with GET in education file');
    })
  }

  sendData = () => {
    axios.post('/api/education', this.props.reduxState.firstReducer).then((response) => {
      console.log('success');
    }).catch((error) => {
      alert('POST error in education file');
      console.log(error);
    });
  }

  // sendData = id => {
  //   const deletion = `/api/education/${id}`
  //   axios.delete(deletion).then((response) => {
  //     this.fetchData();
  //     console.log('success!');
  //     const action = { type: 'DELETE' }
  //     this.props.dispatch(action);
  //   }).catch((error) => {
  //     alert('There was a problem with axios POST delete')
  //   })
  // }

  sendUserToCorrespondingPage = (urlString) => {
    return () => {
      this.props.history.push(urlString);
    }
  };

  handleSubtopicChange = (event) => {
    this.setState({
      customer: { ...this.state.subtopics, [event.target.subtopic]: event.target.value }
    })
  }

  sendUserToRedux = () => {
    console.log('button clicked');
    const action = { type: 'ADD_SUBTOPIC', payload: this.state.subtopics };
    this.props.dispatch(action);
  }


  render() {
    let content = null;

    if (this.props) {
      content = (
        <div>
          {this.props.data}
          <div>

            <Button id="education" variant="raised" onClick={this.sendUserToCorrespondingPage('/education')}>Education</Button>

{JSON.stringify(this.state.subtopics)};
            <TextField
              id="addSubtopic"
              onChange={this.handleSubtopicChange}
              name="name"
              label="Add Subtopic"
              placeholder="Subtopic"
              margin="normal" />
            <Button id="button" variant="outlined" color="secondary" onClick={this.sendUserToRedux}>Add Comment</Button>

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

export default connect(mapReduxStateToProps)(EducationPage);