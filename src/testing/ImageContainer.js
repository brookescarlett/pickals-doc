import React, { Component } from 'react'

export default class ImageContainer extends Component {

    constructor() {
        super()
        this.myRef = React.createRef()
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if (this.myRef.current) {
            let windowHeight = window.innerHeight
            let mid = windowHeight / 2
            let thisTop = this.myRef.current.getBoundingClientRect().top
            
            if (thisTop <= mid) {
                this.myRef.current.style.width = '600px'
                this.myRef.current.style.height = '600px'
                this.myRef.current.style.transition = 'all 2s ease-in-out'

            } else {
                // this.myRef.current.style.backgroundColor = 'blue'
                // this.myRef.current.style.width = '400px'
                // this.myRef.current.style.height = '400px'
                // this.myRef.current.style.transition = 'all 2s ease-in-out'


            }
        }
    }

    render() {
        let style = {
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "400px",
            width: "400px"
        }

        return(
            <div 
                className="my4" 
                style={style} 
                ref={this.myRef} 
                id={this.props.id}>
            </div>
        )
    }
}
