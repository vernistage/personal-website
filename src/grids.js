import React from 'react'
import { Grid } from 'semantic-ui-react'
import ImageGallery from 'react-image-gallery';

const GridExampleVerticallyDivided = () => (
  <Grid divided='vertically'>
    <Grid.Row relaxed columns={1}>
      <Grid.Column>
        <h2> about </h2>
        <p style={{textAlign:"left"}}>
          The joy that comes from producing art and connecting with an audience drives my work. I have a B.A. and M.A. in Art History and spent years studing and working with artists who inspire my creative process. I am always open to creating custom performance experiences and collaborating on new projects.
        </p>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={1}>
      <Grid.Column>
        <h2> connect </h2>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row centered columns={1}>
      <Grid.Column width={6} textAlign='center'>
        <h2> gallery </h2>
        <MyComponent />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

class MyComponent extends React.Component {

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

export default GridExampleVerticallyDivided
