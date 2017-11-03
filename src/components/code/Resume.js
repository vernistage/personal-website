import React, { Component } from 'react';
import resume from './../../assets/SarahColbyResume.pdf'
import './Code.css'

class Resume extends Component {
  render() {
    return (
      <div className="resume">
        <object data={resume} type="application/pdf" width="100%" height="100%">
          <p>If your browser is unable to see this PDF, please visit my <a href="http://www.linkedin.com/in/sarahacolby">LinkedIn</a></p>
        </object>
      </div>
    );
  }
}

export default Resume
