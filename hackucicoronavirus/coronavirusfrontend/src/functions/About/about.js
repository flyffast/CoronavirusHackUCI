import './about.css';
import React, {} from "react";

function About(){
    return(
    <div>
        <div className='background'>
            <div className='logo'>
                <img className ='logocw' src={require("./logocw.JPG")} alt = 'app logo' height = "150" width = "150"/>
            <div className='title'>[Corona Watch]</div>
            </div>
        </div>
        <div className= 'navigation'>
                <a className='home' href="/">Home</a>
                <a className='about' href="/about">About</a>
                <a className='meet' href="/meetthecreators">Meet the Creators</a>
        </div>
        <div className='aboutbody'>
            <div className='abouttext1'>
                Our Purpose:
                <div className='abouttext2'>
                    The purpose of this application is to make sure that people are aware of when the coronvirus strikes.<br></br>
                    When you register your phone number into our system we will give you an alert as of where a confirmed
                    case of the coronvirus strikes<br></br>We will allow you to know how far you are from that location.
                </div>
                <div className ='aboutpic'>
                    <img className ='atag' src={require("./abouttag.JPG")} alt = 'about logo' height = "400" width = "700"/>
                </div>
                <div className='abouttext3'>
                    In this program we used the API services of Twilio and Google Cloud
                </div>
                <div className ='sponsorusplease'>
                    <img className ='gcloud' src={require("./cloud.jpg")} alt= 'cloud logo' height = "100" width = "150"/>
                    <img className ='twilio' src={require("./twil.jpg")} alt= 'twilio logo' height = "100" width = "100"/>
                </div>
            </div>
        </div>
    </div>
    )
}



export default About;