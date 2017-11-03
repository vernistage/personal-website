import React, { Component } from "react";
import Portfolio from './Portfolio.js'
import CodeMenu from './Menu.js'
import Bio from './Bio.js'

class Code extends Component {
  render() {
    return (
      <div>
        <CodeMenu />
        <Bio />
        <Portfolio />
      </div>
    );
  }
}

export default Code
