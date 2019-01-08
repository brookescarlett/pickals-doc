import React, { Component, Fragment } from 'react'
import Load from './Load'

export default class Home extends Component {

    render() {
        console.log((window.innerWidth/8)*6)
        return(
            <Fragment>
                <div className="main mx4 my3 flex flex-column items-center justify-center" id="home">
                    <iframe 
                        src="https://player.vimeo.com/video/305990922"
                        frameborder="0" 
                        title="Pickleman"
                        className="trailer"
                        width="100%"
                        height="100%"
                        webkitallowfullscreen 
                        mozallowfullscreen 
                        allowfullscreen>
                    </iframe>
                    <p className="center description">Until further notice, celebrate everything.</p>
                    <p className="center description">That was Arthur Cohen’s ambitious life motto, and this short doc captures just how he managed to live up to it. But since life-affirming sayings and pickles aren’t always a package deal, let us explain:</p>
                    <p className="center description">When Arthur, a New York based photographer, was diagnosed with ALS in 2014, he decided to turn a pickling hobby into his legacy—PickALS. Though he was losing the ability to walk and talk, Arthur ran with the title of Chief Pickling Officer, founding the non-profit Pickals, which sold his crispy, crunchy, garlicky pickles to raise money for ALS research.</p>
                    <p className="center description">A story of the human will, Arthur turned the morbid into the extraordinary (and often hilarious), raising over a quarter of a million dollars to help fight the disease. All the while, he showed those around him, namely his youngest daughter, Tess, what a life well lived looks like.</p>
                </div>
            </Fragment>
        )
    }
}
