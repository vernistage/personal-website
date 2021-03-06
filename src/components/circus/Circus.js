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
import headshot from './../../images/back-balance-XL.jpg'
import rope from './../../images/rope.jpg';
import YouTube from 'react-youtube';

class Circus extends Component {
  render() {
    return (
      <div className="App">
        <Container className="intro">
          <Image src={rope} size='medium' centered className="sarah-rope" alt="Austin aerialist Sarah on corde lisse aerial rope" />
          <Header as='h1' id="circus-title">
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

class Video extends React.Component {
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return (
      <YouTube
        videoId="bXbPk-kK0Lw"
        opts={opts}
        onReady={this._onReady}
      />
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

const GridExampleVerticallyDivided = () => (
  <Grid divided='vertically'>
    <Grid.Row columns={1}>
      <Grid.Column>
        <Segment clearing padded='very'>
        <Header as='h2' id="about"> about </Header>
          <Image src={headshot} size='medium' shape='rounded' floated='left' alt='austin aerialist sarah colby on trapeze'/>
          <p style={{textAlign:"left"}}>
            A longtime lover of movement and art, Sarah grew up as a competitive gymnast before transitioning to classical ballet and musical theater. By the age of 18, she already choreographed a full production for her local theater in northern Idaho. While earning her degree in Art History at Wellesley College, Sarah danced with the Harvard Ballet Company, the Harvard-Radcliffe Dramatic Club, and the Wellesley College Dancers. Her passion for studying other contemporary artists led her to positions at some of the world's most prominent museums, including the Museum of Fine Arts, Boston, and the Centre Pompidou (MNAM) in Paris, France. Now based in Austin, Texas, Sarah studies contortion and lives her passion for movement in the air as an award-winning aerial performance artist. She carries her own performer's insurance through Specialty Insurance Agency.
          </p>
          <p style={{textAlign:"left"}}>
            In addition to performances, Sarah is available for aerial and creative movement coaching and choreography. She completed Level 1 Trapeze Teacher Training through Born to Fly™ and is CPR/First Aid certified.
          </p>
          <div className="social-buttons">
            <Button color='google plus' href="mailto:sarahcreating@gmail.com">
              <Icon name='mail outline' /> Email Sarah
            </Button>
          </div>
        </Segment>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row centered columns={1}>
      <Grid.Column width={6} textAlign='center'>
        <h2 id="gallery"> gallery </h2>
        <AerialGallery />
      </Grid.Column>
      <p>
        <Button color='instagram' href="http://instagram.com/sarahintheair" target="_blank">
        <Icon name='instagram' /> Instagram
        </Button>
      </p>
    </Grid.Row>
    <Grid.Row centered columns={1}>
      <Segment clearing padded='very'>
      <Header as='h2' id="video" alt="demo video of Austin aerialist Sarah Colby performing on trapeze and other circus apparatus"> demo </Header>
        <Video />
        <p> (Press Play) </p>
      </Segment>
    </Grid.Row>
    <Grid.Row columns={1}>
      <Grid.Column>
        <div>
          <i> © 2017 Sarah Colby, all rights reserved. </i>
        </div>
      </Grid.Column>
    </Grid.Row>
)
  </Grid>
)

export default Circus;
