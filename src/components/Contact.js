import React, { Component } from 'react'

export default class Contact extends Component {

    render() {

        return(
            <div className="flex flex-column justify-center items-center mt4">
                <div style={{backgroundColor: "yellow", width: "300px", height: "350px"}}></div>
                <p className="mt4 center" style={{ width: "75%" }}>
                    Shot over a summer by Arthur’s daughter Tess Cohen and her friend Nastasya Popov, the documentary aims to capture the fun-loving spirit of its star.</p>
                <p className="mt2 center" style={{ width: "75%" }}>Premiering in Spring 2019, PICKLE MAN is a finalist for The Horizon Award, presented at the Sundance Film Festival. </p>
                <p className="mt2 center" style={{ width: "75%" }}>Please contact the filmmakers with inquiries, comments, and pickling stories at picklemandoc@gmail.com</p>
                <p className="mt2 center" style={{ width: "75%" }}>We’d love to hear from you!</p>
            </div>
        )
    }
}
