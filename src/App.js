// React
import React, { Component } from 'react';
// Router
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
// Styling
import { Button } from 'semantic-ui-react'
import Circus from './Circus.js'
import Code from './Code.js'

class Index extends Component {
  render() {
    return (
      <div>
        <a href='/code'>
          <Button inverted color='red'>
            Code
          </Button>
        </a>
        <a href='/circus'>
          <Button inverted color='red'>
            Circus
          </Button>
        </a>
        <Router>
          <div>
            <Route path="/circus" component={Circus}/>
            <Route path="/code" component={Code}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default Index


// class mainMenu extends Component {
//   render() {
//     return (
//       <Router>
//         <div id="background">
//           <Link to="/">Home</Link>
//           <Link to="/circus">Circus</Link>
//           <Link to="/code">Code</Link>
//           <Route exact path="/" component={Home}/>
//           <Route path="/circus" component={Circus}/>
//           <Route path="/code" component={Code}/>
//         </div>
//       </Router>
//     );
//   }
// }
