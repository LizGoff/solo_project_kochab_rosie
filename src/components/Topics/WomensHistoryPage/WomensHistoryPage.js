import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Nav from '../../Nav/Nav';
import GalleryList from '../GalleryList/GalleryList';


const mapStateToProps = state => ({
  user: state.user,
});

class WomensHistoryPage extends Component {
  constructor() {
    super();
    this.state = {
      galleryItems: [],
    };
  }

  componentDidMount() {
    this.getFromGalleryItems();
  }

  getFromGalleryItems = () => {

    axios.get('/gallery')
      .then((response) => {
        this.setState({
          galleryItems: response.data,
        });
      })
      .catch((error) => {
        console.log('error with GET', error);
      })
  }

  render() {
    let content = null
    if (this.props.user.userName) {
      content = (
        <div>
          {this.props.data}
          <div>
            <h1 id="welcome">Thank you for joining the conversation, {this.props.user.userName}!</h1>
            <h2>Women in our history</h2>
            <div>
              <GalleryList galleryItems={this.state.galleryItems} />
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

    export default connect(mapStateToProps)(WomensHistoryPage);