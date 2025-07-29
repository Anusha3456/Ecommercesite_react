import { useState,useEffect } from "react"
import "./category.css"
import {NavLink} from 'react-router-dom'
export default function Categories(){
    
    return(
        <>
            <center><h1>Categories</h1></center>
            <div className="categories">
                <NavLink to='/mensshirts'><img src="ct1.jpeg" alt="ct1" /></NavLink>
                <NavLink to='/womensdresses'><img src="ct2.jpeg" alt="ct1" /></NavLink>
                <NavLink to='/electronics'><img src="ct3.jpeg" alt="ct1" /></NavLink>
                <center><h5>Men's Shirts</h5></center> 
                 <center><h5>Women's Dresses</h5></center> 
                 <center><h5>Electronics</h5></center> 
                <NavLink to='/furniture'><img src="ct4.jpeg" alt="ct1" /></NavLink>
                <NavLink to='/beauty'><img src="ct5.jpeg" alt="ct1" /></NavLink>
                <NavLink to='/fragrence'><img src="ct6.jpeg" alt="ct1" /></NavLink>
                <center><h5>Furniture</h5></center> 
                 <center><h5>Beauty</h5></center> 
                 <center><h5>Fragrence</h5></center> 
            </div>
        
        </>
    )
}