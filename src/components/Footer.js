import "./FooterStyle.css"

import React from "react"

import {FaHome, FaPhone , FaMailBulk, FaFacebook, FaLinkedin, FaInstagram} from "react-icons/fa"

const Footer = () => {
    return <div className="footer">
        <div className="footer-container">

        <div className="left">
            <div className="location">
                <FaHome size={20} style={{color:"white",marginRight:"2rem"}}/>
             <div>
                <p>Murugan Nilyam</p>
                <p>Banglore</p>
             </div>
             <div  className="phone">
                <h4>
                <FaPhone size={20} style={{color:"white" ,marginRight:"2rem"}}/>
               +91- 9148698492
                </h4>
              </div>
             
             <div className="email">
             <h4>
                <FaMailBulk size={20} style={{color:"white",marginRight:"2rem"}}/>
                theju@gmail.com</h4>
             </div>
            </div>
            </div>


        <div className="right">
            <h4>About the company</h4>
            <p>This is me Fahimul kabir. CEO & 
                Founder of Tech2etc. I enjoy discussing new projects and design challenges.</p>
        <div className="social">
            <FaFacebook
            size={30}
            style={{color:"white",marginRight:"1rem"}}
            />
        </div>

        <div className="social">
            <FaLinkedin
            size={30}
            style={{color:"white",marginRight:"1rem"}}
            />
        </div>


        <div className="social">
            <FaInstagram
            size={30}
            style={{color:"white",marginRight:"1rem"}}
            />
        </div>
        
        </div>
        </div>
    </div>
}
export default Footer