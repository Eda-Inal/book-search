import React from 'react'
import "./index.scss"
import book from "../../assets/book.jpg"


function Book() {
  return (
    <div className="container text-center mx-auto">
      <div className="row mx-auto">
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
      <div className="card" >
<img src={book} alt="" />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-info">Details</a>
  </div>
</div>
</div>
  </div>
  </div>
  )
}

export default Book
