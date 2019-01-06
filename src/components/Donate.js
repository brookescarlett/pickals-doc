import React, { Component } from 'react'
import GridContainer from './GridContainer'


export default class Donate extends Component {

    render() {

        return (
     
            <div className="parent-container">
            

                <div className="donate-grid m4">
                    <GridContainer 
                        className="grid-item image header"/>
                    <GridContainer 
                        className="grid-item text first"
                        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}
                        action={"Donate Now →"}
                        actionUrl={"https://pickals.org/donate/"}/>
                    <GridContainer 
                        className="grid-item image second"/>
                    <GridContainer 
                        className="grid-item image third"/>
                    <GridContainer 
                        className="grid-item text fourth"
                        text={"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. "}
                        action={"Learn More →"}
                        actionUrl={"https://pickals.org/the-pickals-story/"}/>
                    <GridContainer 
                        className="grid-item image fifth"/>
                    <GridContainer 
                        className="grid-item text sixth"
                        text={"Amet volutpat consequat mauris nunc. Ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Lobortis feugiat vivamus at augue eget arcu dictum. Velit laoreet id donec ultrices tincidunt arcu non. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur. "}
                        action={"Buy Pickals →"}
                        actionUrl={"https://pickals.org/buy-pickals/"}
                        />

                    {/* <div className="grid-item image header"></div>
                    <div className="grid-item first">
                        <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                    <div className="grid-item image second"></div>
                    <div className="grid-item image third"></div>
                    <div className="grid-item fourth">
                        <p className="mx2 center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                    <div className="grid-item image fifth"></div>
                    <div className="grid-item sixth">
                        <p className="mx2 center">Amet volutpat consequat mauris nunc. Ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Lobortis feugiat vivamus at augue eget arcu dictum. Velit laoreet id donec ultrices tincidunt arcu non. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur.</p>
                    </div> */}
                    
                </div>
            </div>
     
        )
    }
}
