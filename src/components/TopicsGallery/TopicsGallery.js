// import React, { Component } from 'react';
// import { connect } from 'react-redux';

// import TopicsList from '../TopicsList/TopicsList';

// import axios from 'axios';
// import './App.css';

// class TopicsGallery extends Component {
//   constructor() {
//     super();
//     this.state = {
//       topicsItems: [],
//     };
//   }

//   componentDidMount() {
//     this.getFromTopicsItems();
//   }

//   getFromTopicsItems = () => {

//     axios.get('user')
//       .then((response) => {
//         this.setState({
//           topicsItems: response.data,
//         });
//       })
//       .catch((error) => {
//         console.log('error with GET', error);
//       })
//   }

//   addLike = (item) => {
//     console.log('adding likes', item);
//     axios.put(`/user/like/${item.id}`)

//       .then((response) => {
//         console.log('put response', response);
//         this.getFromGalleryItems();
//       })
//       .catch((error) => {
//         console.log('put/add error in addLike', error);
//       });
//   }

//   render() {
//     return (
//       <div className="gallery">
//         <header className="gallery-header">
//           <h1 className="gallery-title">Women Who Inspire</h1>
//         </header>
//         <p>Women in our history</p>
//         <div>
//           <TopicsList topicsItems={this.state.topicsItems}
//           addLike = {this.addLike} />
//         </div>
//       </div>
//     );
//   }
// }

// export default connect(TopicsGallery)(UserPage);

