import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {
    render() {
                const data = this.props.galleryItems.map((item) => {
                return <GalleryItem key={item.id} itemInfo={item} />
                });
            return data;
        }
    
}

export default GalleryList;
