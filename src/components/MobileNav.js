import React, { Component } from 'react'
import Close from '../assets/images/closed.svg'
import Facebook from '../assets/images/facebook.svg'
import Instagram from '../assets/images/instagram.svg'

export default class MobileNav extends Component {

    render() {
        return(
            <div className="mobile-display-nav fixed top-0 left-0 right-0 bottom-0">
                <ul className="my1 mr3 list-reset">
                    <img 
                        src={Close} 
                        alt="close-icon" 
                        width="30" 
                        className="right" 
                        onClick={this.props.handleClick} />
                    <div className="flex flex-column mt3 pt3 ml2">
                        <li className="mobile-item p2 mt2">
                            <a href="/about/"
                                className="dark-green text-decoration-none">The Documentary Short</a>
                        </li>
                        <li className="mobile-item p2">
                            <a href="/donate/"
                                className="dark-green text-decoration-none">Donate</a>
                        </li>
                        <li className="mobile-item p2">
                            <a href="/contact/"
                                className="dark-green text-decoration-none">Contact</a>
                        </li>
                    </div>
                </ul>
                <div className="flex items-center my1 ml2 mt3">
                    <a href="https://www.facebook.com/pickals" target="_blank" rel="noopener noreferrer">
                    <img 
                        src={Facebook} 
                        alt="facebook-icon" 
                        className="social-icons mx2"
                        width="30" />
                    </a>
                    
                    <a href="https://www.instagram.com/pick.als/" target="_blank" rel="noopener noreferrer">
                    <img 
                        src={Instagram} 
                        alt="insta-icon" 
                        className="social-icons mx2"
                        width="30" />
                    </a>

                </div>
            </div>
        )
    }
}
