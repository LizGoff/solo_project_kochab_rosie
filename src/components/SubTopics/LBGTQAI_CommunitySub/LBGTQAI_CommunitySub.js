import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Nav from '../../Nav/Nav';
import { USER_ACTIONS } from '../../../redux/actions/userActions';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Delete from '@material-ui/icons/Delete'
import Edit from '@material-ui/icons/Edit'


const mapStateToProps = state => ({
  user: state.user,
});

class LgbtqiSub extends Component {

  constructor(props) {
    super(props);
    this.state = {
      results: [],
      comment: '',
      topic: 5,
      subtopic: '',
      resourceHelp: [],
      url: '',
      editOn: false
    }
  }

  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    this.fetchData();
    this.fetchResourceData();
    this.setState({
      subtopic: this.props.match.params.id
    })
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  fetchData() {
    axios.get(`/api/conversation/${this.props.match.params.id}`).then((response) => {
      console.log(response.data[0]);
      this.setState({
        results: response.data,
        comment: ''
      })
    }).catch((error) => {
      alert('error with GET in Convo file');
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
      alert('POST error in Convo file');
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

  // PUT

  addEdit = (comment) => {
    console.log('adding edit', comment);
    axios.put(`/api/conversation/${this.state.editId}`, { comment: this.state.comment })
      .then((response) => {
        console.log('put response', response);
        this.fetchData();
        this.setState({
          editOn: false
        })
      })
      .catch((error) => {
        console.log('put/add error in addEdit', error);
      });
  }

  toggleEdit = (commentToEdit) => () =>
    this.setState({
      editOn: true,
      comment: commentToEdit.comment,
      editId: commentToEdit.id
    });

  // Resources data

  fetchResourceData() {
    axios.get('/api/resource').then((response) => {
      console.log(response.data[0]);
      this.setState({
        resourceHelp: response.data,
        url: '',
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
      alert("Thank you for submitting a resource link for women!")
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
    let buttonDisplayed = <Button id="addSubtopicButton" variant="outlined" color="secondary" onClick={this.sendData}>Add Comment</Button>
    if (this.state.editOn) {
      buttonDisplayed = <Button id="addSubtopicButton" variant="outlined" color="secondary" onClick={this.addEdit}>Submit Edit</Button>
    }
    if (this.props.user.userName) {
      content = (
        <div>
          {this.props.data}
          <div>
            <h1 id="welcome">
              Thank you for joining the conversation, {this.props.user.userName}!
          </h1>
          <p>Code of Conduct - This is a space to help each other, to share thoughts, and to pose questions.
              Please set the tone for the online conversations by being polite, open, and respectful.
              Make sure you respect the confidentiality of others and do not disclose any non-public
              information or personal information to protect privacy and safety.
              Share url links for resources, help each other, support one another, and find strength in others.</p>
            <p>No woman should stand alone.</p>
            <h2>Comments</h2>
            <div id="inputFieldsCommentAndResource">
              <div>
                <textarea rows="2" cols="15" wrap="hard"
                  id="addSubtopic"
                  onChange={this.handleSubtopicChange}
                  name="comment"
                  value={this.state.comment}
                  label="Share your thoughts"
                  placeholder="Share here"
                  margin="normal" ></textarea>
                {buttonDisplayed}
              </div>
              <div>
                <TextField
                  id="addResource"
                  onChange={this.handleResourceChange}
                  name="url"
                  value={this.state.url}
                  label="Share resources for women here"
                  placeholder="Share url here"
                  margin="normal" />
                <Button id="addResourceButton" variant="outlined" color="secondary" onClick={this.sendResourceData}>Add Resource</Button>
              </div>
            </div>
            <div>
              <ul id="shareTopicsButtons">
                {this.state.results.map((comments, i) => (
                  <li key={i} >
                    {this.props.user.userId === comments.user_id ?
                      <span>
                        <Button id="deleteButton" onClick={(() => this.dataDelete(comments.id))} variant="outlined" size="small"><Delete /></Button>
                        <Button id="editButton" onClick={this.toggleEdit(comments)} variant="outlined" size="small"><Edit /></Button>
                      </span>
                      : ''}

                    <Button id="convoTopic">{comments.comment}</Button>
                  </li>
                ))}
              </ul>
            </div >
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

export default connect(mapStateToProps)(LgbtqiSub);
