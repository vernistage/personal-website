import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import './Home.css';

class Home extends Component {
  codeBackground(e){
    e.preventDefault();
    console.log('The link was clicked.');
  }

  circusBackground(e){
    e.preventDefault();
    console.log('The link was clicked.');
  }

  render() {
    return (
      <div className='main-buttons'>
        <div className='buttons'>
          <a href='/code'>
            <Button className='menu-button' size='huge' inverted color='red' onMouseEnter={this.codeBackground}>
              Code
            </Button>
          </a>
          <a href='/circus'>
            <Button className='menu-button' size='huge' inverted color='red' onMouseEnter={this.circusBackground}>
              Circus
            </Button>
          </a>
        </div>
      </div>
    );
  }
}

export default Home
