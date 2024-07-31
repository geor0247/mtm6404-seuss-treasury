import React, { useEffect, useState } from 'react';


function Quotes() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch('https://seussology.info/api/quotes/random/10') 
      .then(response => response.json())
      .then(data => setQuotes(data));
  }, []);

  return (
    <div className="quotes-container">
      <h1>Quotes</h1>
      <ul>
        {quotes.map((quote, index) => (
          <li key={index}>{quote.text}</li>
        ))}
      </ul>
    </div>
  );
}


export default Quotes;