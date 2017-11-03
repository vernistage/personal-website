import React, { Component } from "react";
import Portfolio from './Portfolio.js'
import CodeMenu from './Menu.js'
import Bio from './Bio.js'
import './Code.css'

class Code extends Component {
  render() {
    return (
      <div>
        <div className="menu">
          <CodeMenu className />
        </div>
        <div className="bio">
          <Bio />
        </div>
        <Portfolio />
      </div>
    );
  }
}

export default Code
