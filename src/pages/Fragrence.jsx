import "./allinone.css"
import {useState ,useEffect } from "react"
import {NavLink} from 'react-router-dom'

export default function Mensshirts(){
    const url="https://dummyjson.com/products/category/fragrances"
    const[data,setdata]=useState([])
    async function getdata(){
        const res=await fetch(url)
        const ddata=await res.json()
        setdata(ddata.products)
    }
  useEffect(()=>{
    getdata()
  },[])
    return(
        <>
        <div className="mensshirts">
          {
           data.map((e)=>(
            <div>
                <img src={e.thumbnail} alt="image" />
                <h5>{e.title}</h5><br />
                <h5>{e.price}</h5><br />
                <NavLink to={`/mensshirts/${e.id}`} state={{ product: e }} >
                <button>Know More</button></NavLink>
                
            </div>
           ))
          }
        </div>
        </>
    )
}