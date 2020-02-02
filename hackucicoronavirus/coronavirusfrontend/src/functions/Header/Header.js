import React, { useState }  from "react";
import {Button} from 'reactstrap';
import './Header.css';
import axios from 'axios';


/* Asks for Name, Location, and Phone Number*/

function Header(){
    const[enteredName, createName] = useState("");   
    const[enteredLocation,createLocation] = useState("");
    const[enteredNumber,createNumber] = useState("");
    
     
    function handleInputChange(e){
        createName(e.target.value)
        createLocation(e.target.value)
        createNumber(e.target.value)
    }

    function handleSubmit(e){   
        let information = {
            'name': enteredName,
            'location': enteredLocation,
            'number':enteredNumber
        }
        e.preventDefault();
        axios.post('send this info to this link',information).then(res => {
            console.log(res.data);
            window.location = './confirmation'
        }).catch(err => {
            window.location = './confirmation';
        })
    }


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
        
        <div className='setup'>
            <div className='message'>
                Sign up for notifications now!
            <div className='nametext'>
                Name:
                <div className= 'test'>
                            <input className ='namebox' type='text' value ={enteredName.enteredName} required size='12' onChange={handleInputChange}></input>
                </div>
            </div>
            <div className='phonetext'>
                Phone Number:
                <div className= 'test2'>
                    <input className ='phonebox' type='tel' value ={enteredName.enteredName} required size='12' minLength ='10' maxLength ='13' onChange={handleInputChange}></input>
                </div>
            </div>
            <div className='locationtext'>
                City in US:
                <div className= 'test'>
                    <input className ='locationbox' type='text' value ={enteredName.enteredName} required size='12' onChange={handleInputChange}></input>
                </div>
            </div>
            <div className = 'confirm'>
                <Button className = 'button' onClick={handleSubmit}>Confirm</Button>
            </div>
        </div>
        </div>
        
        <div className='Ending Tag'>
            <div className='owner'>
                Created at HACKUCI 2020 by: Travis Nguyen, Tin Luu, Kit Ma
            </div>
        </div>
    </div>

  
    )
}
export default Header;