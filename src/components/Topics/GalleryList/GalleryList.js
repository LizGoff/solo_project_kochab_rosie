import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {
    render() {
                const data = this.props.galleryItems.map((item) => {
                return <GalleryItem key={item.id} itemInfo={item} />
                // TO DO
                // addLike={this.props.addLike}
                });
            return data;
        }
    
}

export default GalleryList;
