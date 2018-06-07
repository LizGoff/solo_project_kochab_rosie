import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Nav from '../../Nav/Nav';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const mapReduxStateToProps = (reduxState) => (
  { reduxState }
);

class EducationSub extends Component {

  constructor(props) {
    super(props);
    this.state = {
      subtopics: []
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    axios.get('/api/education').then((response) => {
      console.log(response.data[0]);
      this.setState({
        subtopics: response.data
      })
    }).catch((error) => {
      alert('error with GET in EducationSub file');
    })
  }

  sendData = () => {
    console.log('button clicked');
    axios.post('/api/education', this.state).then((response) => {
      console.log('success');

    }).catch((error) => {
      alert('POST error in EducationSub file');
      console.log(error);
    });
  }

  // sendDataToDelete = id => {
  //   const deletion = `/api/education/${id}`
  //   axios.delete(deletion).then((response) => {
  //     this.fetchData();
  //     console.log('success!');
  //     const action = { type: 'DELETE' }
  //     this.props.dispatch(action);
  //   }).catch((error) => {
  //     alert('There was a problem with axios POST delete Sub')
  //   })
  // }

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
    const listItems = <ul>
    {this.state.subtopics.map((taco, i) => <li key={i} id="listConvos">{taco.subtopic}</li>)}
    </ul>

    if (this.props) {
      content = (
        <div>
          {this.props.data}
          <div>

            <div>
              {listItems}
            </div>

            <TextField
              id="addSubtopic"
              onChange={this.handleSubtopicChange}
              name="subtopic"
              label="Add Subtopic"
              placeholder="Subtopic"
              margin="normal" />

            <Button id="addSubtopic" variant="outlined" color="secondary" onClick={this.sendData}>Add Subtopic</Button>
            {/* <Button id="delete" variant="outlined" color="secondary" onClick={this.sendDataToDelete}>Delete</Button> */}

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