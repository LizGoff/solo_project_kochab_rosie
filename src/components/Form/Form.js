import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Nav from '../../components/Nav/Nav';

const mapReduxStateToProps = (reduxState) => (
  { reduxState }
);

// const mapStateToProps = state => ({
//   user: state.user,
// });

class Form extends Component { 

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     results: []
  //   }
  // }

  constructor(props) {
    super(props);
    this.state = {
        subtopics: { subtopic: '', user_id: '', topic_id: '' }
    }
}

  componentDidMount() {
    console.log('component did mount');
    this.fetchData();
  }

  // fetchData() {
  //   axios.get('/api/subtopics').then((response) => {
  //     console.log(response.data[0]);
  //     this.setState({
  //       results: response.data
  //     })
  //   }).catch((error) => {
  //     alert('error with GET');
  //   })
  // }

  // sendData = () => {
  //   axios.post('/api/subtopics', this.props.reduxState.firstReducer).then((response) => {
  //     console.log('success');
  //   }).catch((error) => {
  //     alert('POST error');
  //     console.log(error);
  //   });
  // }

  // sendData = id => {
  //   const deletion = `/api/subtopics/${id}`
  //   axios.delete(deletion).then((response) => {
  //     this.fetchData();
  //     console.log('success!');
  //     const action = { type: 'DELETE' }
  //     this.props.dispatch(action);
  //   }).catch((error) => {
  //     alert('There was a problem with axios POST delete')
  //   })
  // }

  // sendUserToCorrespondingPage = (urlString) => {
  //   return () => {
  //     this.props.history.push(urlString);
  //   }
  // };

  // As we change the input, update local state
  handleUserChange = (event) => {
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

    if (this.props.user.userName) {
      content = (
        <div>
          {this.props.data}
          <div>

            {/* <Button id="inHistory" variant="raised" onClick={this.sendUserToCorrespondingPage('/women_in_history')}>Women In Our History</Button>
            <Button id="ourStory" variant="raised" onClick={this.sendUserToCorrespondingPage()}>Our History</Button>
            <Button id="inHerstory" variant="raised" onClick={this.this.sendUserToCorrespondingPage()}>Women Living HerStory</Button>

            <Button id="pride" variant="raised" onClick={this.this.sendUserToCorrespondingPage('/lbgtqi')}>LBGTQI Community</Button>
            <Button id="wage" variant="raised" onClick={this.this.sendUserToCorrespondingPage('/wage_gap')}>The Wage Gap</Button>
            <Button id="endingViolence" variant="raised" onClick={this.this.sendUserToCorrespondingPage('/ending_violence')}>Ending Violence</Button>

            <Button id="science" variant="raised" onClick={this.this.sendUserToCorrespondingPage('/science')}>Women In Science</Button>
            <Button id="health" variant="raised" onClick={this.this.sendUserToCorrespondingPage('/health')}>Health</Button>
            <Button id="art" variant="raised" onClick={this.this.sendUserToCorrespondingPage('/arts')}>Women In The Arts</Button>

            <Button id="education" variant="raised" onClick={this.this.sendUserToCorrespondingPage('/education')}>Education</Button>
            <Button id="politics" variant="raised" onClick={this.this.sendUserToCorrespondingPage('/politics')}>Politics</Button>
            <Button id="tech" variant="raised" onClick={this.this.sendUserToCorrespondingPage('/technology')}>Technology</Button> */}


            <TextField
              id="addSubtopic"
              onChange={this.handleUserChange}
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

export default connect(mapStateToProps)(Form);