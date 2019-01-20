import React, { Component, Fragment } from 'react'
import Epic from '../assets/images/epic.fuckals.jpg'
import GridContainer from './GridContainer'
import Load from './Load'

export default class Home extends Component {

    render() {
        console.log((window.innerWidth/8)*6)
        return(
            <Fragment>
                <div className="main mx4 mb3 mt4 flex flex-column items-center justify-center" id="home">
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
                    
                    <GridContainer
                        className="mobile-description grid-item text sixth display-line-break py2 px3 my4"
                        text={`"Until further notice, celebrate everything." \n \n That was Arthur Cohen’s life motto, and PICKLE MAN captures just how he managed to live up to it. But since life-affirming sayings and pickles aren’t always a package deal, let us explain: \n \n When Arthur, a New York based photographer, was diagnosed with ALS in 2014, he decided to turn a pickling hobby into his legacy—PickALS. Though he was losing the ability to walk and talk, Arthur ran the non-profit Pickals, which sold his crispy, crunchy, garlicky pickles to raise money for ALS research. \n \n  A story of the human will, Arthur turned the morbid into the extraordinary (and often hilarious), raising over a quarter of a million dollars to help fight the disease. All the while, he showed those around him, namely his youngest daughter, Tess, what a life well lived looked like.` }
                    />
        
                    <GridContainer 
                        img={true} 
                        imgUrl={Epic}
                        className="mobile-img grid-item"
                    />
                    <em><p className="center description">Photograph: Robert X. Fogarty, <a href="https://dearworld.com/">Dear World</a></p></em>
                </div>
            </Fragment>
        )
    }
}
