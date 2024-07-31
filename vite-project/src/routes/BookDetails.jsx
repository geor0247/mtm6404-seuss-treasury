import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`https://seussology.info/api/books/${id}`) 
      .then(response => response.json())
      .then(data => setBook(data));
  }, [id]);

  return book ? (
      <>
        <h2>Book Details</h2>
        <div className='book-details'>
          <h1>{book.title}</h1>
          <img src={book.image} alt={book.title} />
          <p>{book.description}</p>
        </div>
      </>
    ) : null;
}

export default BookDetails;