import React, { Component } from 'react'
import ScrollTrigger from 'react-scroll-trigger';


export default class TestComponent extends Component {

    constructor(){
        super()
        this.myRef = React.createRef();
        this.state = { visible: false, style: { opacity: 0, backgroundColor: "blue", height: '200px', marginTop: "200px", width: "10%"}}
    }

    componentDidMount() {
        // this.myRef.current.focusTextInput();
        // console.log(this.myRef.current)
    }

    
    onEnterViewport = () => {
        this.setState({
            visible: true,
            style: { opacity: 1, width: '80%', height: '200px', backgroundColor: "blue", marginTop: "200px", transition: 'all 1s ease-in-out'}
        }, () => console.log(this.props.id, 'working'))

        // let windowHeight = window.innerHeight
        // let windowWidth = window.innerWidth
        
        // console.log(this.myRef.current)
        // let elemLeft
        // let visibleOffset
        // let hideOffset
        // if (this.myRef.current) {
        //     // elemLeft = this.myRef.current.element.getBoundingClientRect().left
        //     // visibleOffset = (windowWidth / 2) - (this.myRef.current.element.getBoundingClientRect().width / 2)
        //     // hideOffset = visibleOffset - this.myRef.current.element.getBoundingClientRect().width
        //     elemLeft = this.myRef.current.element.getBoundingClientRect().top
        //     console.log(window.pageYOffset - elemLeft)
        //     visibleOffset = (windowHeight / 2) - (this.myRef.current.element.getBoundingClientRect().height / 2)
        //     hideOffset = visibleOffset - this.myRef.current.element.getBoundingClientRect().height

        //     console.log(this.props.id, elemLeft, visibleOffset, hideOffset)
        //     if ((window.pageYOffset - elemLeft) <= visibleOffset && (window.pageYOffset - elemLeft) >= hideOffset) {
        //         console.log(this.props.id, 'poop')
        //         this.myRef.current.element.style.backgroundColor = 'red'
        //         this.myRef.current.element.style.height = '600px'
        //         this.myRef.current.element.style.transition = 'all 2s ease-in-out'


        //     }
        // }
        if (this.myRef.current) {

            let windowHeight = window.innerHeight
            let gridTop = windowHeight * .3
            let gridBottom = windowHeight * .6
    
            let thisTop = this.myRef.current.element.getBoundingClientRect().top 

            console.log(thisTop, gridTop, gridBottom)
            if (thisTop >= gridTop && (thisTop + this.myRef.current.element.getBoundingClientRect().height) <= gridBottom) {
                console.log(this.props.id, 'poop')
                    this.myRef.current.element.style.backgroundColor = 'red'
                    this.myRef.current.element.style.height = '600px'
                    this.myRef.current.element.style.transition = 'all 2s ease-in-out'
            }
        }
    }

    onExitViewport = () => {
        this.setState({
            visible: false,
        }, () => console.log(this.props.id, 'working'));
    }

    render(){
        const { visible, style } = this.state;
        return(
            <div>
                <ScrollTrigger onEnter={this.onEnterViewport} onExit={this.onExitViewport} ref={this.myRef}>
                    <div className={`container ${visible ? 'container-animate' : ''}`} style={style}>
                        <p>hey</p>
                    </div>
                </ScrollTrigger>

            </div>
                  )
              }
          }
