// React
import React, { Component } from 'react';
// Router
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
// Styling
import Circus from './components/circus/Circus'
import Code from './components/code/Code'
import Home from './components/home/Home'
import Resume from './components/code/Resume'

class Index extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/circus" component={Circus}/>
          <Route path="/code" component={Code}/>
          <Route path="/code/resume" component={Resume}/>
        </div>
      </Router>
    );
  }
}

export default Index
