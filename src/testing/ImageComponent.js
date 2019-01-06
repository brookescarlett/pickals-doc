import React, { Component, Fragment } from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

export default class ImageComponent extends Component {

    checkVis = (visible) => {
        if (visible.inViewport) {
            // Part of the element is in the viewport (the area defined by the offset property)
            console.log(visible)
        } else if (visible.onScreen) {
            // Part of the element is visible on the screen
        } else {
            // Element is no longer visible
        }
    }

    render(){
        return(
            <Fragment>
                <ScrollAnimation
                    animateIn="fadeIn">
                    <div style={{backgroundColor: "blue"}} className="m4">
                        <p>HEY</p>
                    </div>
                </ScrollAnimation>
            </Fragment>
        )
    }
}
