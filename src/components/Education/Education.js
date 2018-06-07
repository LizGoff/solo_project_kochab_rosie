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
      subtopics: {
        subtopic: []
      },
      // newSubtopic: '',
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

  // handleNewSubtopicChange = (event) => {
  //   this.setState({
  //     newSubtopic: event.target.value,
  //   });
  // }

  handleSubtopicChange = (event) => {
    this.setState({
      // subtopics: { ...this.state, [event.target.name]: event.target.value }
      [event.target.name]: event.target.value
    })
  }

  sendUserToRedux = () => {
    console.log('button clicked');
    const action = { type: 'ADD_SUBTOPIC', payload: this.state};
    this.props.dispatch(action);
  }


  render() {
    let content = null
    // let contentDisplay = this.state.subtopics.map((list, i) => {
    //   return (this.props.subtopics)
  // });
    if (this.props) {
      content = (
        <div>
          {this.props.data}
          <div>

            <Button id="education" variant="raised" onClick={this.sendUserToCorrespondingPage('/education')}>education</Button>

            {JSON.stringify(this.state.subtopics)};

            <TextField
              id="addSubtopic"
              onChange={this.handleSubtopicChange}
              // subtopic={this.state.subtopics}
              name="subtopic"
              label="Add Subtopic"
              placeholder="Subtopic"
              margin="normal" />

            <Button id="button" variant="outlined" color="secondary" onClick={this.sendUserToRedux}>Add Comment</Button>
            <Button id="button" variant="outlined" color="secondary" onClick={this.sendData}>Submit</Button>
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