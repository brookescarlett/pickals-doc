import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Load from './components/Load'
import Home from './components/Home'
import Donate from './components/Donate'
import Contact from './components/Contact'
import MobileNav from './components/MobileNav'


import Title from './assets/images/title_alpha.png'
import Hamburger from './assets/images/noun_menu_568033.svg'


class App extends Component {

  constructor(){
    super()
    this.state = { show: false }
  }

  handleClick = () => {
    console.log('display nav')
    this.setState({ show: !this.state.show})
  }

  render() {
    return (
      <Fragment>
        <Router>
          <div>
            <nav className="desktop-nav nav">
              {/* <ul className="list-reset flex justify-between items-center px3">

                <div>
                  <li className="p2">
                    <Link to="/" 
                          className="text-decoration-none">
                          <img 
                            src={Title} 
                            alt="logo-png" 
                            width="200"
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
              </ul> */}

              <ul className="list-reset flex justify-center items-center px3 mr2">
                  <li className="p2">
                    <Link to="/about/"
                      className="caps text-decoration-none">The Documentary Short</Link>
                  </li>
                  <li className="p2">
                    <Link to="/"
                      className="text-decoration-none">
                      <img
                        src={Title}
                        alt="logo-png"
                        width="240"
                      />
                    </Link>
                  </li>
                  <li className="p2">
                    <Link to="/donate/"
                      className="caps text-decoration-none">Donate</Link>
                  </li>
                  <li className="p2">
                    <Link to="/contact/"
                      className="caps text-decoration-none">Contact</Link>
                  </li>
              </ul>
            </nav>

            <div className="mobile-nav flex items-center justify-between m3">
              <img
                src={Title}
                alt="logo-png"
                width="100"  />
              <img 
                src={Hamburger} 
                alt="menu-button"
                width="28"
                onClick={this.handleClick} />
            </div>

            {this.state.show ? <MobileNav handleClick={this.handleClick} /> : null}

            <Route exact path="/" component={Home} />
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
