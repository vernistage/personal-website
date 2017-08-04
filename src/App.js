import React, { Component } from 'react';
import { Image } from 'semantic-ui-react'
import rope from './images/rope.jpg';
import { Container } from 'semantic-ui-react'
import './App.css';
import MenuExampleStackable from './stackableMenu.js'
import GridExampleVerticallyDivided from './grids.js'
import "react-image-gallery/styles/css/image-gallery.css";

const ImageExampleFluid = () => (
  <Image src={rope} size='medium' centered className="sarah-rope" alt="Sarah on corde lisse" fluid />
)

const ContainerExampleContainer = () => (
  <div>
    <Container>
      <ImageExampleFluid />
      <h1>Sarah Colby</h1>
    </Container>
    <MenuExampleStackable />
    <GridExampleVerticallyDivided  />
  </div>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <ContainerExampleContainer />;
        </div>
      </div>
    );
  }
}

export default App;
