import { useState , useEffect } from "react"
import "./SearchBar.css"



export default function SearchBar(){
const [filteredProducts,setFilteredProducts] = useState("")
 function fetchAPIData(){
    fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
   // .then(result =>console.log(result))
   .then(products =>{


   })
 }
 useEffect(fetchAPIData, {})
 return <div>
    <h1>The Search Bar</h1>
  </div>
}