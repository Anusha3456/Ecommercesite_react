import { useState } from "react"
import "./signup.css"
import {NavLink} from 'react-router-dom'

export default function(){
    const[form,setform]=useState({username:"",password:"",email:''})
    
    function handlechange(e){
        const newdata=e.target.value
        const inputfield=e.target.name
        setform({...form,[inputfield]:newdata})

    }
    function handlesubmit(e){
        e.preventDefault()
        console.log("formdata:",form)
        setform({username:"",password:"",email:""})
    }

    return(
       
            
           <form className="form" onSubmit={handlesubmit}>
            <center><h3>SignUp</h3></center><br /><br /><br />
            <label htmlFor="username">UserName </label>
            <input type="text" name="username" value={form.username} onChange={handlechange} /> 
            <br /><br />
            <label htmlFor="password">Password </label>
            <input type="password" name="password" value={form.password} onChange={handlechange} />
            <br /><br />
           <label htmlFor="email">Email</label>
            <input type="email" name="email" value={form.email} onChange={handlechange} />
            <br /><br />
           <center><button type="submit">Signup</button></center> 
            <br /><br />
          
            Already have an account?<NavLink to="/Loginpage">Login</NavLink>
           </form>
       
    )
}