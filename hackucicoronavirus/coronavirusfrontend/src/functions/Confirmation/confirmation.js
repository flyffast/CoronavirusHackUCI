import React, {} from 'react';
import './confirmation.css';

function Confirmation(){
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
            <div className='text'>
                Thank you for signing up, you will now recieve a set of instructions through text. <br></br>Stay safe don't get the kung flu.
            </div>
            <div className='banvirus'>
                <img className ='bacteria' src={require('./bacteria.jpg')} alt='bacteria pic' height= "300" width = "300"/>
            </div>
        </div>
    )
}
export default Confirmation;