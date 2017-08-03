import React, { Component } from 'react';
import { Image } from 'semantic-ui-react'
import gazelle from './gazelle.jpg';
import rope from './rope.jpg';
import { Container } from 'semantic-ui-react'
import './App.css';
import MenuExampleStackable from './stackableMenu.js'

const ImageExampleFluid = () => (
  <Image src={rope} size='medium' centered className="sarah-trap-gazelle" alt="Sarah in gazelle on static trapeze" fluid />
)

const ContainerExampleContainer = () => (
  <div>
    <Container>
      <ImageExampleFluid />
      <h1>Sarah Colby</h1>
    </Container>
    <MenuExampleStackable />
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
