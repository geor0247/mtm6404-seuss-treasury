import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://seussology.info/api/books') 
      .then(response => response.json())
      .then(data => setBooks(data));
  }, []);

  return (
    <div className="books-container">
      <h1>Seuss Treasury</h1>
      <div>
        {books.map(book => (
          <div className="book-item" key={book.id}>
            <Link to={`/book/${book.id}`}>
              <img src={book.image} alt={book.title} />
              <h2>{book.title}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;