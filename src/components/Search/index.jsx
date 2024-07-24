import React, { useState } from 'react'
import "./index.scss"
import { IoMdSearch } from "react-icons/io";
import { useDispatch,useSelector } from 'react-redux';
import { searchInput,fetchData,setToast } from '../../redux/booksSlice';


function Search() {
  const dispatch = useDispatch();
  const [input , setInput] =  useState("");
  const contents = useSelector((state) => state.books.contents);
  const toast = useSelector((state) => state.books.toast);
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
      dispatch(setToast(true)) // sonra toast bildirimi ekle
    }
  }
  const handleClickToast = () => {
    dispatch(setToast(false))
  }
    return (
    <>
    <div className="input-group flex-nowrap  mx-auto mt-4">

     
    <input type="text" placeholder='Search book' value={input} onChange={handleChange} class="form-control" style={{fontSize:22}}  aria-describedby="addon-wrapping"/>
    <span className="input-group-text "  id="addon-wrapping "><IoMdSearch onClick={handleClick}  className='icon' /></span>
    {
                toast && (
                    <div className="toast align-items-center text-bg-info border-0 show" role="alert" aria-live="assertive" aria-atomic="true">
                        <div className="d-flex">
                            <div className="toast-body" >
                                Empty Input!
                            </div>
                            <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"  onClick={handleClickToast} aria-label="Close"></button>
                        </div>
                    </div>
                )
            }
    
 
  </div>

  </>
  )
}

export default Search
