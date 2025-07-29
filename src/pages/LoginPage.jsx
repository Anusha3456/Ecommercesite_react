import { useState } from "react"
import "./login.css"
import {NavLink} from 'react-router-dom'

export default function(){
    const[form,setform]=useState({username:"",password:""})
    
    function handlechange(e){
        const newdata=e.target.value
        const inputfield=e.target.name
        setform({...form,[inputfield]:newdata})

    }
    function handlesubmit(e){
        e.preventDefault()
        console.log("formdata:",form)
        setform({username:"",password:""})
    }

    return(
       
            
           <form className="form" onSubmit={handlesubmit}>
            <center><h3>Login</h3></center><br /><br /><br />
            <label htmlFor="username">UserName </label>
            <input type="text" name="username" value={form.username} onChange={handlechange} /> 
            <br /><br />
            <label htmlFor="password">Password </label>
            <input type="password" name="password" value={form.password} onChange={handlechange} />
            <br /><br />
            <label htmlFor="checkbox"></label>
            <input type="checkbox" name="checkbox"  />Remember me
            <br /><br />
           <center><button type="submit">LOGIN</button></center> 
            <br /><br />
            
            <div className="login-links">
               New User? <NavLink to="/Signuppage">Signup</NavLink>&nbsp;&nbsp;
               <a href="#"><i>Forgot your password?</i></a>
             </div>

           </form>
       
    )
}