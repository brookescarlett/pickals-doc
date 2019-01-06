import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Load from './components/Load'
import Home from './components/Home'
import Donate from './components/Donate'
import Contact from './components/Contact'

import Title from './assets/images/title_alpha.png'


class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <div>
            <nav className="nav">
              <ul className="list-reset flex justify-between px3">

                <div>
                  <li className="p2">
                    <Link to="/" 
                          className="text-decoration-none">
                          <img 
                            src={Title} 
                            alt="logo-png" 
                            width="160"
                            />
                    </Link>
                  </li>
                </div>

                <div className="flex">
                  <li className="p2">
                    <Link to="/about/" 
                          className="text-decoration-none">The Documentary Short</Link>
                  </li>
                  <li className="p2">
                    <Link to="/donate/" 
                          className="text-decoration-none">Donate</Link>
                  </li>
                  <li className="p2">
                    <Link to="/contact/" 
                          className="text-decoration-none">Contact</Link>
                  </li>
                </div>
              </ul>
            </nav>

            <Route exact path="/" component={Load} />
            <Route path="/about" component={Home} />
            <Route path="/donate/" component={Donate} />
            <Route path="/contact/" component={Contact} />
          </div>
        </Router>
      </Fragment>
    );
  }
}

export default App;
