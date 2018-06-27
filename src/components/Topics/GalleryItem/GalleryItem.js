import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class GalleryItem extends Component {
    constructor() {
        super();
        this.state = {
            listDescription: false,
        };
    }

    clickHandleClick = (event) => {
        console.log('clicked', this.state);
        this.setState(
            { listDescription: !this.state.listDescription }
        );
    }

    handleLikesClick = (event) => {
        console.log('click on like button.');
        this.props.addLike(this.props.itemInfo);
    }

    //toggle
    render() {

        let detailsToShow;
        if (this.state.listDescription) {
            // true
            detailsToShow = <p id="infoGallery">{this.props.itemInfo.description}</p>;
        } else {
            //false
            detailsToShow = <img id="photosGallery" src={this.props.itemInfo.path}
                alt={this.props.itemInfo.description} />;
        }
        return (
            <div className="gallery-item">
                <Button variant="raised" onClick={this.clickHandleClick}>
                    {detailsToShow}
                </Button>
            </div>
        );
    }
}

export default GalleryItem;
