import React from 'react'
import { Grid } from 'semantic-ui-react'
import ImageGallery from 'react-image-gallery';
import backBalanceXL from './images/back-balance-XL.jpg';

const GridExampleVerticallyDivided = () => (
  <Grid divided='vertically'>
    <Grid.Row columns={1}>
      <Grid.Column>
        musings
        <img src= {backBalanceXL}/>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={1}>
      <Grid.Column>
        gallery
        <MyComponent />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={1}>
      <Grid.Column>
        connect
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
        original: <img src= {backBalanceXL}/>,
        thumbnail: 'images/back_balance_S.jpg',
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/2/',
        thumbnail: 'http://lorempixel.com/250/150/nature/2/'
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/3/',
        thumbnail: 'http://lorempixel.com/250/150/nature/3/'
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
