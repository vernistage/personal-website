import React, { Component } from 'react';
// Styling
import { Menu, Grid, Image, Container, Segment, Header, Form, Input, TextArea, Button, Icon } from 'semantic-ui-react'
import "react-image-gallery/styles/css/image-gallery.css";
import './App.css';
import './index.css';
// Components
import AerialGallery from './components/AerialGallery.js';
import MainMenu from './components/Menu.js'
import ContactForm from './components/ContactForm.js'
// Images
import headshot from './images/headshot.jpeg'
import rope from './images/rope.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container className="intro">
          <Image src={rope} size='medium' centered className="sarah-rope" alt="Sarah on corde lisse" fluid />
          <Header as='h1'>
            Sarah Colby
            <Header.Subheader>
              aerial performance artist
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
    <Grid.Row relaxed columns={1}>
      <Grid.Column>
        <Header as='h2'> about </Header>
        <Segment clearing padded='very'>
        <Image src={headshot} size='tiny' shape='rounded' floated='left' />
        <p style={{textAlign:"left"}}>
          The joy that comes from producing art and connecting with an audience drives my work. I have undergraduate and graduate degrees in Art History and spent years studing and working with artists who inspire my creative process. I am always open to creating custom performance experiences and collaborating on new projects.
        </p>
        </Segment>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row centered columns={1}>
      <Grid.Column width={6} textAlign='center'>
        <h2> gallery </h2>
        <AerialGallery />
      </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={1}>
      <Grid.Column>
        <Header as='h2'>
          connect with me
        </Header>
        <Segment clearing padded='very'>
          <ContactForm />
          <div className="social-buttons">
            <Button color='instagram'>
              <Icon name='instagram' /> Instagram
            </Button>
            <Button color='google plus'>
              <Icon name='mail outline' /> Email
            </Button>
          </div>
        </Segment>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={1}>
      <Grid.Column>
        <div textAlign="left">
          <i> © 2017 Sarah Colby. All rights reserved. </i>
        </div>
      </Grid.Column>
    </Grid.Row>
)
  </Grid>
)

export default App;
