// React
import React from 'react'
// Router
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
// Circus
import Circus from './Circus.js'

const Home = () => (
  // Buttons go here
  <div>
    <h2>Home</h2>
  </div>
)

const Code = ({ match }) => (
  <div>
    <h3>{match.params.codeId}</h3>
  </div>
)

const Index = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/circus">Circus</Link></li>
        <li><Link to="/code">Code</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/circus" component={Circus}/>
      <Route path="/code" component={Code}/>
    </div>
  </Router>
)
export default Index
