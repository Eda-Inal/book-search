import React from 'react'
import "./index.scss"
import { IoMdSearch } from "react-icons/io";


function Search() {
   
  

    

  

  

    return (
    <>
    <div className="input-group flex-nowrap  mx-auto mt-4">
    <input type="text" placeholder='Search book' class="form-control" style={{fontSize:22}}  aria-describedby="addon-wrapping"/>
    <span className="input-group-text "  id="addon-wrapping "><IoMdSearch  className='icon' /></span>

    
 
  </div>

  </>
  )
}

export default Search
