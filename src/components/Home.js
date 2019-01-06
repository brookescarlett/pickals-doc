import React, { Component, Fragment } from 'react'
import Load from './Load'

export default class Home extends Component {

    render() {
        console.log((window.innerWidth/8)*6)
        return(
            <Fragment>
                <div className="main m4 absolute top-0 left-0 right-0 bottom-0 flex flex-column items-center justify-center" id="home">
                    <iframe 
                        src="https://player.vimeo.com/video/305990922"
                        frameborder="0" 
                        title="Pickleman"
                        width={(window.innerWidth / 8)*5}
                        height="100%"
                        className="py4"
                        webkitallowfullscreen 
                        mozallowfullscreen 
                        allowfullscreen>
                    </iframe>
                    <p className="center description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <p className="center description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
            </Fragment>
        )
    }
}
