import React, { useState }  from "react";
import { Link } from "react-router-dom";
import './Header.css';



function FetchInformation() {

    const[Input,Output] = UseState();

function HandleInputChange(e){
    Output({
        ...Input,
        [e.target.name]: e.target.value
    });
}

function HandleSubmit(e){
    e.preventDefault()
    axios.post('/confirmed',Input).then(res =>{
        console.log(res.data);
    }).catch(err => {
        console.log("Error")
    })
}

/* Title = Wants a title can determine the size
Information = Fetching user input contains button
*/
return(
    <div classname="Title">
        Corona Virus
        <div>
            <Form>
                <Form.Label>Name</Form.Label>
                <Form.Control name="name" onChange={HandleInputChange}></Form.Control>
                <Link to='/confirm'>
                    <Button onClick={HandleSubmit}>Submit Button</Button>
                </Link>
             </Form>
        </div>

    </div>
)}