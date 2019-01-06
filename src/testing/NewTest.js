import React, { Component } from 'react'

export default class NewText extends Component {

    constructor(){
        super()
        this.myRef = React.createRef()
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        // console.log('here')
        // console.log(this.myRef.current)
        if (this.myRef.current) {

            let windowHeight = window.innerHeight
            let mid = windowHeight / 2

            let thisTop = this.myRef.current.getBoundingClientRect().top 
            // let thisHeight = this.myRef.current.getBoundingClientRect().height 

            if (this.props.id === 2) {
                // console.log(thisTop, gridTop, thisTop + this.myRef.current.getBoundingClientRect().height, gridBottom)
                // console.log('top:', thisTop, 'height:', thisHeight,  'mid', mid)

            }

            if (thisTop <= mid ) {
                // this.myRef.current.style.backgroundColor = 'yellow'
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

    render(){
        let style 

        let imageStyle = {
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "400px",
            width: "400px"
        }

        let textStyle = {
            backgroundColor: "orange",
            height: "400px",
            width: "400px"
        }
        
        this.props.type === "image" ? style = imageStyle : style = textStyle
        console.log(style)
        return(
            <div className="my4" style={style} ref={this.myRef} id={this.props.id}>
                {this.props.type === "text" ? <p>{this.props.text}</p> : null}
            </div>
        )
    }
}
