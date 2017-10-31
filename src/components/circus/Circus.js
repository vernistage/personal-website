import React, { Component } from 'react';
// Styling
import { Grid, Image, Container, Segment, Header, Button, Icon } from 'semantic-ui-react'
import "react-image-gallery/styles/css/image-gallery.css";
import './Circus.css';
// Components
import AerialGallery from './AerialGallery.js';
import MainMenu from './Menu.js'
import ContactForm from './ContactForm.js'
// Images
import headshot from './../../images/face.jpg'
import rope from './../../images/rope.jpg';

class Circus extends Component {
  render() {
    return (
      <div className="App">
        <Container className="intro">
          <Image src={rope} size='medium' centered className="sarah-rope" alt="Sarah on corde lisse" />
          <Header as='h1'>
            Sarah Colby
            <Header.Subheader>
              aerialist
            </Header.Subheader>
            <Header.Subheader>
              austin, texas
            </Header.Subheader>
          </Header>
        </Container>
        <MainMenu />
        <GridExampleVerticallyDivided  />
      </div>
    );
  }
}

const GridExampleVerticallyDivided = () => (
  <Grid divided='vertically'>
    <Grid.Row columns={1}>
      <Grid.Column>
        <Header as='h2' id="about"> about </Header>
        <Segment clearing padded='very'>
        <Image src={headshot} size='small' shape='rounded' floated='left' />
        <p style={{textAlign:"left"}}>
          Sarah is an award-winning aerial artist available for performance and artistic collaboration. With half a decade of professional training and performing in the circus arts, she can deliver polished and unique spotlight or ambient spectacles. Please inquire below for more details.
        </p>
        <p style={{textAlign:"left"}}>
          She completed the Paper Doll Militia Level 1 Trapeze teacher training as part of the Born to Fly certificate program and loves to share her passion for trapeze with curious beginners. You no longer have to run away to join the circus!
        </p>
        </Segment>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row centered columns={1}>
      <Grid.Column width={6} textAlign='center'>
        <h2 id="gallery"> gallery </h2>
        <AerialGallery />
      </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={1}>
      <Grid.Column>
        <Header as='h2' id="connect">
          connect with me
        </Header>
        <Segment clearing padded='very'>
          <ContactForm />
          <div className="social-buttons">
            <Button color='instagram' href="http://instagram.com/sarahintheair" target="_blank">
              <Icon name='instagram' /> Instagram
            </Button>
            <Button color='google plus' href="mailto:sarahcreating@gmail.com">
              <Icon name='mail outline' /> Email
            </Button>
          </div>
        </Segment>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={1}>
      <Grid.Column>
        <div>
          <i> © 2017 Sarah Colby. All rights reserved. </i>
        </div>
      </Grid.Column>
    </Grid.Row>
)
  </Grid>
)

export default Circus;
