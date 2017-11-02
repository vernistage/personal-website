import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import './Home.css';
import coding from './../../images/this-page.png'
import trapeze from './../../images/circus-cover.jpg';

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
  }

  circusBackground(e){
    e.preventDefault();
    this.setState({circus: true, code: false})
  }

  removeBackground(e){
    e.preventDefault();
    this.setState({circus: false, code: false})
  }

  render() {
    let imgChoice = ''
    if (this.state.code){
      imgChoice = coding
    } else if (this.state.circus){
      imgChoice = trapeze
    } else {
      imgChoice = ''
    }
    return (
      <div className='main-buttons' style={{backgroundImage: 'url(' + imgChoice + ')'}}>
        <div className='buttons' style={{opacity: 1}}>
          <a href='/code' >
            <Button className='menu-button' size='huge' inverted color='red' onMouseEnter={this.codeBackground.bind(this)} onMouseLeave={this.removeBackground.bind(this)}>
              Code
            </Button>
          </a>
          <a href='/circus' >
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
