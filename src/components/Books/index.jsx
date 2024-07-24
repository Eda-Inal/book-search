import React from 'react';
import './index.scss';
import { useSelector } from 'react-redux';

function Book() {
  const contents = useSelector((state) => state.books.contents);

  return (

    <div className="container text-center mx-auto mt-5 mb-4">
      <div className="row mx-auto">
        {contents.map((book, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4">
            <div className="card" style={{height:300}}>
              <img src={book.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/150'} alt={book.volumeInfo.title} />
              <div className="card-body d-flex flex-column">
                <h6 className="card-title">{book.volumeInfo.title}</h6>

                <button
                  type="button"
                  className="btn btn-warning details mt-auto mx-auto text-white"
                  data-bs-toggle="modal"
                  data-bs-target={`#modal${index}`}
                  style={{ fontSize: 16 }}
                 
                >
                  Details
                </button>
                <div className="modal fade" id={`modal${index}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="modalLabel">{book.volumeInfo.title}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <p><strong>Published Date:</strong> {book.volumeInfo.publishedDate || 'N/A'}</p>
                        <p><strong>Description:</strong> {book.volumeInfo.description || 'No description available.'}</p>
                        <p><strong>Publisher:</strong> {book.volumeInfo.publisher || 'N/A'}</p>
                        <p><strong>Page Count:</strong> {book.volumeInfo.pageCount || 'N/A'}</p>
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
        ))}
      </div>
    </div>
  );
}

export default Book;
