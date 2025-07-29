
import "./navbar.css"

import {NavLink} from 'react-router-dom'
export default function Navbar(){
  return(
    <>
    <div className="navbar">
    <div className="logo">
        <NavLink to='/'>
        <img src="logo2.jpg" height= "80" width="200" alt="logo" />
        </NavLink>
        
    </div>
    
    <div className="middle">
         <NavLink to="/"><h2>Home</h2></NavLink>
         <NavLink to="/shop"><h2>Shop</h2></NavLink>
         <NavLink to="/categories"><h2>Categories</h2></NavLink>
         <NavLink to="/contact"><h2>Contact</h2></NavLink>
        
        
    </div>
    
    <div className="searchbar">
       <i className="fa-solid fa-magnifying-glass"></i>
        <input type="search" name="search" id="search" placeholder="search products"  ></input>
       
    </div>
    
    <div className="carticon">
        <NavLink to='/cartpage'>
            <i className="fa-solid fa-cart-shopping"></i>
        </NavLink>
       
    </div>
    
    <div className="usericon">
        <NavLink to='/loginpage'>
             <i className="fa-solid fa-user"></i>
        </NavLink>
      
    </div>
    </div>
    </>
  )
}
