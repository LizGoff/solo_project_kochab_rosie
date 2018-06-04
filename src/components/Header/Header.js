import React from 'react';

const Header = ({ title }) => (
  <div className="instructions">
    <div>
      <h1 className="lead">{ title }</h1>
    </div>
  </div>
);

export default Header;

// import React, { Component } from 'react';
// import GalleryList from '../GalleryList/GalleryList';

// import axios from 'axios';
// import './App.css';

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       galleryItems: [],
//     };
//   }

//   componentDidMount() {
//     this.getFromGalleryItems();
//   }

//   getFromGalleryItems = () => {

//     axios.get('/gallery')
//       .then((response) => {
//         this.setState({
//           galleryItems: response.data,
//         });
//       })
//       .catch((error) => {
//         console.log('error with GET', error);
//       })
//   }

//   addLike = (item) => {
//     console.log('adding likes', item);
//     axios.put(`/gallery/like/${item.id}`)

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
//       <div className="App">
//         <header className="App-header">
//           <h1 className="App-title">Women Who Inspire</h1>
//         </header>
//         <p>Women in our history</p>
//         <div>
//           <GalleryList galleryItems={this.state.galleryItems}
//           addLike = {this.addLike} />
//         </div>
//       </div>
//     );
//   }
// }

// export default App;

