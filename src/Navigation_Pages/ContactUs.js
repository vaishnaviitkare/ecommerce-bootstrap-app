import React, { useState } from "react";
import "./ContactUs.css";
const ContactUs=()=>{
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        phone:"",
    });
    const changeHandler=(e)=>{
          const {name,value}=e.target;
          setFormData((prev)=>({
             ...prev,
             [name]:value,
          }
          ))
    }

    const submitHandler=async(e)=>{
        e.preventDefault();
        try{
        const response=await fetch("https://contact-data-c2d0a-default-rtdb.firebaseio.com/contact.json",{
            method:"POST",
            body:JSON.stringify(formData),
             headers:{
      'Content-Type':'application/json'
    }
        })

        if (!response.ok) {
      throw new Error("Something went wrong");
    }

    setFormData({
      name: "",
      email: "",
      phone: "",
    });

}catch(error){
console.log(error);
}
  }

    return(
        <div className="maindiv">

        <p className="form-para">Contact Us</p>    

        <div className="divContact">
        <form className="contact" onSubmit={submitHandler}>
        <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" name="name" value={formData.name} onChange={changeHandler}/>
        </div>

        <div className="form-group">
        <label htmlFor="email">Email ID:</label>
        <input id="email" type="email" name="email" value={formData.email} onChange={changeHandler}/>
        </div>

        <div className="form-group">
        <label htmlFor="phone">Phone NO:</label>
        <input id="phone" type="number" name="phone" value={formData.phone} onChange={changeHandler}/>
        </div>

         <div className="form-group">
        <button type="submit">Submit</button>
        </div>
        </form>
        </div>
        </div>
    )
}
export default ContactUs;