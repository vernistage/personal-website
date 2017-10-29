// React
import React, { Component } from 'react';
// Router
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
// Styling
import Circus from './Circus'
import Code from './Code'
import Home from './components/home/Home'

class Index extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/circus" component={Circus}/>
          <Route path="/code" component={Code}/>
        </div>
      </Router>
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
