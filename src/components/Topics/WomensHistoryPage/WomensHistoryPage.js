import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Nav from '../../Nav/Nav';
import { USER_ACTIONS } from '../../../redux/actions/userActions';
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

  addLike = (item) => {
    console.log('adding likes', item);
    axios.put(`/gallery/like/${item.id}`)

      .then((response) => {
        console.log('put response', response);
        this.getFromGalleryItems();
      })
      .catch((error) => {
        console.log('put/add error in addLike', error);
      });
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
              <GalleryList galleryItems={this.state.galleryItems}
                addLike={this.addLike} />
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