import React, { useState } from 'react'
import "./index.scss"
import { IoMdSearch } from "react-icons/io";
import { useDispatch,useSelector } from 'react-redux';
import { searchInput,fetchData } from '../../redux/booksSlice';


function Search() {
  const dispatch = useDispatch();
  const [input , setInput] =  useState("");
  const [toast,setToast] = useState(false);
  const contents = useSelector((state) => state.books.contents);
  console.log(contents);
   
  const handleChange =(e) => {
setInput(e.target.value)
  }
  const handleClick =() => {
    if(input !== ""){
dispatch(searchInput(input));
dispatch(fetchData(input));
setInput("");
    }else{
      setToast(true) // sonra toast bildirimi ekle
    }
  }
    return (
    <>
    <div className="input-group flex-nowrap  mx-auto mt-4">
     
    <input type="text" placeholder='Search book' value={input} onChange={handleChange} class="form-control" style={{fontSize:22}}  aria-describedby="addon-wrapping"/>
    <span className="input-group-text "  id="addon-wrapping "><IoMdSearch onClick={handleClick}  className='icon' /></span>

    
 
  </div>

  </>
  )
}

export default Search
