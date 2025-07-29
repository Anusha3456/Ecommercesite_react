import { useEffect, useState } from "react"
import "./homepage.css"

export default function Homepage(){
   

    return(
        <div>
           
            <div className="bannerimage">
                <img src="banerimage.jpg" alt="image" />
            </div>
            
            <div className="type">
                <img src="type1.jpg" alt="type1" />
                <img src="type2.jpg" alt="type1" />
                <img src="type4.jpg" alt="type1" />
                <img src="type3.jpg" alt="type1" />
                 <center><h5>Men</h5></center> 
                 <center><h5>Women</h5></center> 
                 <center><h5>Electronics</h5></center> 
                 <center><h5>Accessories</h5></center> 
            </div>

            <div className="sbanner">
                <img src="sbanner.jpg" alt="sbanner" />
               
            </div>

        </div>
    )
}