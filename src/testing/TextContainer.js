import React, { Component } from 'react'

export default class TextContainer extends Component {

    
    render() {
        let style = {
            backgroundColor: "orange",
            height: "400px",
            width: "400px"
        }

        return (
            <div className="my4" style={style} id={this.props.id}>
               <p>{this.props.text}</p>
            </div>
        )
    }
}
