import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import './Home.css';
import headshot from './../../images/headshot.jpeg'
import rope from './../../images/rope.jpg';

class Home extends Component {
  constructor(){
    	super();
      this.state = {
      	code: false,
        circus: false,
      }
    }

  codeBackground(e){
    e.preventDefault();
    this.setState({code: true})
    console.log('code');
  }

  circusBackground(e){
    e.preventDefault();
    this.setState({circus: true, code: false})
    console.log('circus');
  }

  removeBackground(e){
    e.preventDefault();
    this.setState({circus: false, code: false})
    console.log('out');
  }

  render() {
    let imgUrl = ''
    if (this.state.code){
      imgUrl = headshot
    } else if (this.state.circus){
      imgUrl = rope
    } else {
      imgUrl = ''
    }
    return (
      <div className='main-buttons' style={{backgroundImage: 'url(' + imgUrl + ')'}}>
        <div className='buttons'>
          <a href='/code'>
            <Button className='menu-button' size='huge' inverted color='red' onMouseEnter={this.codeBackground.bind(this)} onMouseLeave={this.removeBackground.bind(this)}>
              Code
            </Button>
          </a>
          <a href='/circus'>
            <Button className='menu-button' size='huge' inverted color='red' onMouseEnter={this.circusBackground.bind(this)} onMouseLeave={this.removeBackground.bind(this)}>
              Circus
            </Button>
          </a>
        </div>
      </div>
    );
  }
}

export default Home
