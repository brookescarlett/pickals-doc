import React, { Component, Fragment  } from 'react'
import Home from './Home'

export default class Load extends Component {

    state = {home: false}

    onClick = () => {
        console.log('here')
        this.setState({ home: true})
    }

    renderButton = ()  => {
        return setTimeout(this.makeButton, 5000)
    }

    makeButton = () => {
        console.log("here")
        return `<button onClick={this.onClick}>Click Me</button`
    }

    render() {
        let style 
        this.state.home ? style = { opacity: 0, transition: "all 2s ease-in-out", display: "none" } : style = { opacity: 1, transition: "all 2s ease-in-out" }
    
        return (
            <Fragment>
                <div className="fixed top-0 left-0 right-0 bottom-0 fadeOut" style={style}>
                    <div className="loader flex justify-center items-center fadeOut">
                        <button className="buttonStyle" onClick={this.onClick}>
                            Enter Pickle Man
                        </button>
                    </div>
                </div>
                {this.state.home ? <Home /> : null}
            </Fragment>
        )
    }
}
// import Transition from 'react-transition-group/Transition';
// import React, { Component } from 'react'
// import Home from './Home'


// export default class Fade extends Component {

//     state = { in: window.innerWidth > 400 ? false : true, home: false }

//     toggleEnterState = () => {
//         this.setState({ in: !this.state.in })
//     }

//     componentDidMount = () => {
//         this.toggleEnterState()
//     }

   
//     render() {
//         const duration = 500;

//         const defaultStyle = {
//             transition: `opacity ${duration}ms ease-in-out`,
//             opacity: 1,
//         }

//         const homeDefault = {
//             transition: `opacity ${duration}ms ease-in-out`,
//             opacity: 0,
//         }

//         const transitionStyles = {
//             entering: { opacity: 1 },
//             entered: { opacity: 0, zIndex: -99, display: "none" },
//         }

//         const homeTransition = {
//             entering: { opacity: 0 },
//             entered: { opacity: 1},
//         }

//         console.log(this.state)
//         return (
//             <div>
//                 <Transition in={this.state.in} unmountOnExit={true}>
//                     {(state) => (
//                         <div style={{
//                             ...defaultStyle,
//                             ...transitionStyles[state]
//                         }}>
//                             <div 
//                                 className="fixed top-0 left-0 right-0 bottom-0 loader"
//                                 onClick={this.toggleEnterState}>
//                             </div>
//                         </div>
//                     )}
//                 </Transition>
//                 <Transition in={this.state.in} timeout={5000}>
//                     {(state) => (
//                         <div style={{
//                             ...homeDefault,
//                             ...homeTransition[state]
//                         }}>
//                             <Home />
//                         </div>
//                     )}
//                 </Transition>
//             </div>
//         )
//     }
// }
