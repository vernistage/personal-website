import React, { Component } from 'react'
import ImageGallery from 'react-image-gallery';

class AerialGallery extends Component {

  handleImageLoad(event) {
    console.log('Image loaded ', event.target)
  }

  render() {

    const images = [
      {
        original: 'https://s3.ca-central-1.amazonaws.com/sarah-aerial-images/flag-XL.jpg',
        thumbnail: 'https://s3.ca-central-1.amazonaws.com/sarah-aerial-images/flag-S.jpg'
      },
      {
        original: 'https://s3.ca-central-1.amazonaws.com/sarah-aerial-images/trapeze-split-XL.jpg',
        thumbnail: 'https://s3.ca-central-1.amazonaws.com/sarah-aerial-images/trapeze-split-S.jpg',
      },
      {
        original: 'https://s3.ca-central-1.amazonaws.com/sarah-aerial-images/rope-split-XL.jpg',
        thumbnail: 'https://s3.ca-central-1.amazonaws.com/sarah-aerial-images/rope-split-S.jpg',
      },
      {
        original: 'https://s3.ca-central-1.amazonaws.com/sarah-aerial-images/straps-arabesque-XL.jpg',
        thumbnail: 'https://s3.ca-central-1.amazonaws.com/sarah-aerial-images/straps-arabesque-S.jpg'
      },
      {
        original: 'https://s3.ca-central-1.amazonaws.com/sarah-aerial-images/handstand-XL.jpg',
        thumbnail: 'https://s3.ca-central-1.amazonaws.com/sarah-aerial-images/handstand-S.jpg'
      }
    ]

    return (
      <ImageGallery
        items={images}
        slideInterval={2000}
        onImageLoad={this.handleImageLoad}/>
    );
  }

}

export default AerialGallery
