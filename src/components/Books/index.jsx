import React from 'react'
import "./index.scss"
import book from "../../assets/book.jpg"


function Book() {
  return (
    <div className="container text-center mx-auto mt-5">
      <div className="row mx-auto">
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
      <div className="card" >
<img src={book} alt="" />

  <div className="card-body">
    <h4 className="card-title">Card title</h4>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

<button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{fontSize:18}}>
Details
</button>


<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className=" modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>


    
  </div>
</div>
</div>
  </div>
  
  </div>
  )
}

export default Book
