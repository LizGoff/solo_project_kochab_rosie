// import React, { Component } from 'react';
// import Button from '@material-ui/core/Button';


// class TopicsItem extends Component {
//     constructor() {
//         super();
//         this.state = {
//             listDescription: false,
//         };
//     }

//         clickHandleClick = (event) => {
//             // click on photo 
//             console.log('clicked', this.state);
//             this.setState(
//                 { listDescription: !this.state.listDescription }
//             );
//         }

//         handleLikesClick = (event) => {
//             console.log('click on like button.');
//             this.props.addLike(this.props.itemInfo);
//         }

//         //toggle
//         render() {

//             let detailsToShow;
//             if (this.state.listDescription) {
//                 // true
//                 detailsToShow = <p id="info">{this.props.itemInfo.description}</p>;
//             } else {
//                 //false
//                 detailsToShow = <img id="photos" src={this.props.itemInfo.path}
//                     alt={this.props.itemInfo.description} />;
//             }
//             return (
//                 <div className="topics-item">
//                     <Button variant="raised" onClick= {this.clickHandleClick}>
//                         {detailsToShow}
//                         </Button>
    
//                     <p className="likes-count">{this.props.itemInfo.likes}</p>
//                     <Button id="favoriteButton" variant="raised" onClick={this.handleLikesClick}>Favorite</Button>
//                 </div>
//             );
//         }
//     }
    
//     export default TopicsItem;
