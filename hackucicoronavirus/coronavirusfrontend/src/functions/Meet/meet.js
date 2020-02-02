import './meet.css';
import React, {} from "react";

function meet(){
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

            <div className = 'messagetitle'>
                Meet the Creators!
            </div>
            <div className = 'photos'>
                <img className = 'tra' src={require("./travis.png")} alt= "tra" height = "300" width = "300"/>
                <img className = 'tin' src={require("./tin.png")} alt= "tin" height = "300" width = "300"/>
                <img className = 'kit' src={require("./kit2.JPG")} alt=" kit" height = "300" width = "300"/>
            </div>
            <div className = 'tratxt'>
                Tra Nguyen 
            </div>
            <div className ='tratxt2'>
                Backend Programmer
            </div>
            <div className = 'tintxt'>
                Tin Luu
            </div>
            <div className='tintxt2'>
                Backend Programmer
            </div>
            <div className = 'kittxt'>
                Kit Ma
            </div>
            <div className = 'kittxt2'>
                Frontend Progammer
            </div>
            <div className='linkedin'>
                <a className='tralink' href="https://github.com/TravisN959"> </a>
                <a className='tinlink' href="https://github.com/tin-the-element"></a>
                <a className='kitlink' href="https://www.linkedin.com/in/kit-ma-768415194/"></a>
            </div>
        </div>
    )
}

export default meet;