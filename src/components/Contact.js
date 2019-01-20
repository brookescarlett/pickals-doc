import React, { Component } from 'react'
import Nastya from '../assets/images/R1-04832-0029.JPG'
import Pickles from '../assets/images/IMG_4816.jpg'
import Tess from '../assets/images/12747492_10208341129823452_2518764176259019261_o.jpg'

export default class Contact extends Component {

    render() {

        return(
     
            <div className="flex justify-center items-center image-container mt4">
                <img src={Nastya} alt="nastya" className=" contact-pics mx2"/>
                <div className="contact-text text  px2 flex flex-column">
                    <p className="center">
                        Shot over a summer by Arthur’s daughter Tess Cohen and her friend Nastasya Popov, the documentary aims to capture the fun-loving spirit of its star.</p>
                    <p className="center">Premiering in Spring 2019, PICKLE MAN is a finalist for The Horizon Award, presented at the Sundance Film Festival. </p>
                    <p className="center">Please contact the filmmakers with inquiries, comments, and pickling stories at picklemandoc@gmail.com</p>
                    <p className="center">We’d love to hear from you!</p>
                </div>
                <img src={Tess} alt="tess"  className=" contact-pics mx2"/>    
               

                
            </div>
        )
    }
}
