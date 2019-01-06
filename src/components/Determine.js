import React, { Component, Fragment } from 'react'
import Load from './Load'
import Home from './Home'


export default class Determine extends Component {

    constructor() {
        super()
        this.state = { activeComponent: "Load" }
    }
    
    componentDidMount = () => {
        setInterval(this.changeComponet, 8000)
    }

    changeComponet = () => {
        console.log('here')
        this.setState({ activeComponent: "Home"}, () => console.log('present', this.state.activeComponent))
    }

    render() {
        console.log(this.state.activeComponent)
        return (
            <Fragment>
               
                <Load onClick={this.changeComponet}/> 
               
            </Fragment>
        )
    }
}
