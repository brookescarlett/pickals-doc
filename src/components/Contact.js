import React, { Component } from 'react'

export default class Contact extends Component {

    render() {

        return(
            <div className="flex flex-column justify-center items-center mt4">
                <div style={{backgroundColor: "yellow", width: "300px", height: "350px"}}></div>
                <p className="mt4 center" style={{ width: "50%" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <p className="mt2 center" style={{ width: "50%" }}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        )
    }
}
