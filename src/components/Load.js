// import React, { Component } from 'react'

// export default class Load extends Component {

//     render() {
//         return (

//             <div className="fixed top-0 left-0 right-0 bottom-0 fadeOut">
//                 <div className="loader flex justify-center items-center fadeOut">
//                     <button onClick={this.props.onClick}>
//                         Click me
//                     </button>
//                 </div>
//             </div>
//         )
//     }
// }
import Transition from 'react-transition-group/Transition';
import React, { Component } from 'react'
import Home from './Home'


export default class Fade extends Component {

    state = { in: false, home: false }

    toggleEnterState = () => {
        this.setState({ in: true })
    }

    componentDidMount = () => {
        this.toggleEnterState()
    }

    render() {
        const duration = 500;

        const defaultStyle = {
            transition: `opacity ${duration}ms ease-in-out`,
            opacity: 1,
        }

        const homeDefault = {
            transition: `opacity ${duration}ms ease-in-out`,
            opacity: 0,
        }

        const transitionStyles = {
            entering: { opacity: 1 },
            entered: { opacity: 0, zIndex: -99, display: "none" },
        }

        const homeTransition = {
            entering: { opacity: 0 },
            entered: { opacity: 1},
        }

        console.log(this.state)
        return (
            <div>
                <Transition in={this.state.in} timeout={5000} unmountOnExit={true}>
                    {(state) => (
                        <div style={{
                            ...defaultStyle,
                            ...transitionStyles[state]
                        }}>
                            <div className="fixed top-0 left-0 right-0 bottom-0 loader"></div>
                        </div>
                    )}
                </Transition>
                <Transition in={this.state.in} timeout={5000}>
                    {(state) => (
                        <div style={{
                            ...homeDefault,
                            ...homeTransition[state]
                        }}>
                            <Home />
                        </div>
                    )}
                </Transition>
            </div>
        )
    }
}
