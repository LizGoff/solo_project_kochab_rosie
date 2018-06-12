// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import Nav from '../../Nav/Nav';
// import { USER_ACTIONS } from '../../../redux/actions/userActions';
// import Button from '@material-ui/core/Button';

// const mapStateToProps = state => ({
//   user: state.user, 
// });

// class EducationPage extends Component {

//   componentDidMount() {
//     this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
//   }

//   componentDidUpdate() {
//     if (!this.props.user.isLoading && this.props.user.userName === null) {
//       this.props.history.push('home');
//     }
//   }

//   sendUserToCorrespondingPage = (urlString) => {
//     return () => {
//       this.props.history.push(urlString);
//     }
//   };

//   render() {
//     let content = null;
//     if (this.props.user.userName) {
//       content = (
//         <div>
//           <h1 id="welcome">
//           Thank you for joining the conversation {this.props.user.userName}.
//           </h1>
//           <h2>Education</h2>
//           <div>

//             <Button id="convoTopic" variant="raised" onClick={this.sendUserToCorrespondingPage('/education_convo1')}>Does anyone know anything about Prime Digital Academy?</Button>
//             <Button id="convoTopic" variant="raised" onClick={this.sendUserToCorrespondingPage('/education_convo2')}>Are there any scholarships that help women become educators in my area?</Button>
//             <Button id="convoTopic" variant="raised" onClick={this.sendUserToCorrespondingPage('/education_convo3')}>Who is your favorite female educator?</Button>
//             <Button id="convoTopic" variant="raised" onClick={this.sendUserToCorrespondingPage('/education_convo4')}>Why are educators paid less than other professionals?</Button>
//             <Button id="convoTopic" variant="raised" onClick={this.sendUserToCorrespondingPage('/education_convo5')}>What is gender mainstreaming?</Button>
//             <Button id="convoTopic" variant="raised" onClick={this.sendUserToCorrespondingPage('/education_convo6')}>Which are the safest colleges for women?</Button>
//             <Button id="convoTopic" variant="raised" onClick={this.sendUserToCorrespondingPage('/education_convo7')}>What STEM schools are best for my daughter?</Button>
//             <Button id="convoTopic" variant="raised" onClick={this.sendUserToCorrespondingPage('/education_convo8')}>Which colleges are the best for STEM careers?</Button>
//             <Button id="convoTopic" variant="raised" onClick={this.sendUserToCorrespondingPage('/education_convo9')}>What female educator inspires you the most?</Button>

//           </div>
//         </div>
//       );
//     }

//     return (
//       <div>
//         <Nav />
//         {content}
//       </div>
//     );
//   }
// }

// // this allows us to use <App /> in index.js
// export default connect(mapStateToProps)(EducationPage);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Nav from '../../Nav/Nav';
import { USER_ACTIONS } from '../../../redux/actions/userActions';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Delete from '@material-ui/icons/Delete'
import Edit from '@material-ui/icons/Edit'

const mapStateToProps = state => ({
  user: state.user,
});

class EducationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {

      results: [],
      subtopic: '',
      topic: 4,
      
      resourceHelp: [],
      url: '',
      editOn: false
    }
  }

  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    this.fetchData();
    this.fetchResourceData();
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  sendUserToCorrespondingPage = (urlString) => {
    return () => {
      this.props.history.push(urlString);
    }
  };

  fetchData() {
    axios.get(`/api/subtopics/${4}`).then((response) => {
      console.log(response.data[0]);
      this.setState({
        results: response.data,
        subtopic: ''
      })
    }).catch((error) => {
      alert('error with GET in sub file');
    })
  }

  handleSubtopicChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  sendData = () => {
    console.log('button clicked');
    axios.post('/api/subtopics', this.state).then((response) => {
      console.log('success');
      this.fetchData();
    }).catch((error) => {
      alert('POST error in Sub file');
      console.log(error);
    });
  }

  dataDelete = id => {
    console.log(this.state.results);
    const deletion = `/api/subtopics/${id}`
    axios.delete(deletion).then((response) => {
      this.fetchData();
      console.log('success with delete!');
    }).catch((error) => {
      alert('There was a problem with DELETE  Sub')
    })
  }

  // PUT

  addEdit = (subtopic) => {
    console.log('adding edit', subtopic);
    axios.put(`/api/subtopics/${this.state.editId}`, { subtopic: this.state.subtopic })
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

  toggleEdit = (subtopicToEdit) => () =>
    this.setState({
      editOn: true,
      subtopic: subtopicToEdit.subtopic,
      editId: subtopicToEdit.id
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
    let buttonDisplayed = <Button id="addSubtopicButton" variant="outlined" color="secondary" onClick={this.sendData}>Add subtopic</Button>
    if (this.state.editOn) {
      buttonDisplayed = <Button id="addSubtopicButton" variant="outlined" color="secondary" onClick={this.addEdit}>Submit Edit</Button>
    }
    if (this.props.user.userName) {
      content = (
        <div>
          {this.props.data}
          <div>
            <h1 id="welcome">
              Thank you for joining the conversation {this.props.user.userName}
            </h1>
            <h2>Education</h2>
            <div>
              <Paper>
                <Table id="table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Start a Conversation!</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.state.results.map((subtopics, i) => (
                      <TableRow key={i}>
                        <TableCell><Button id="convoTopic" variant="raised" onClick={this.sendUserToCorrespondingPage(`/lbgtqi_convo/${subtopics.id}`)}>{subtopics.subtopic}</Button></TableCell>
                        <TableCell><Button id="deleteButton" onClick={(() => this.dataDelete(subtopics.id))} variant="outlined" size="small"><Delete /></Button></TableCell>
                        <TableCell><Button id="editButton" onClick={this.toggleEdit(subtopics)} variant="outlined" size="small"><Edit /></Button></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Paper>

              <div>
                <TextField
                  id="addSubtopic"
                  onChange={this.handleSubtopicChange}
                  name="subtopic"
                  value={this.state.subtopic}
                  label="Share your thoughts"
                  placeholder="Share here"
                  margin="normal" />
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
      
          export default connect(mapStateToProps)(EducationPage);
          
