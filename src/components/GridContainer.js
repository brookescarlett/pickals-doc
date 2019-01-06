import React, { Component } from 'react'

export default class GridContainer extends Component {

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
            let thisTop = this.myRef.current.getBoundingClientRect().top
            let thisBottom = this.myRef.current.getBoundingClientRect().bottom

            if (thisTop <= (windowHeight - 200) && thisBottom > 50) {

                if (this.myRef.current.className.includes('second')) {
                    
                    this.myRef.current.style.opacity = 1
                    this.myRef.current.style.transition = 'all 2s ease-in-out 0.5s'
                    console.log(thisBottom)


                } else {
                    this.myRef.current.style.opacity = 1
                    this.myRef.current.style.transition = 'all 2s ease-in-out'
                }

            } else if (thisBottom < 50 ){
                console.log(thisBottom, this.myRef.current)
                this.myRef.current.style.opacity = 0
                this.myRef.current.style.transition = 'all 2s ease-in-out 0.5s'



            }
        }
    }


    render(){
        return(
            <div className={this.props.className} ref={this.myRef}>
                {this.props.text ? 
                    <p className="mx2 center">{ this.props.text }<a href={this.props.actionUrl} target="_blank" rel="noopener noreferrer" className="action-link">{ this.props.action }</a></p> 
                : null }
            </div>
        )
    }
}
