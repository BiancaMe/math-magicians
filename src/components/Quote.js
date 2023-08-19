import React, { useState, useEffect } from 'react';
import '../style/quote.css';

const path = 'https://api.api-ninjas.com/v1/quotes?category=intelligence';

const Quote = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const getQuote = async () => {
    try {
      const info = await fetch(path, {
        method: 'GET',
        headers: { 'X-Api-Key': '0ZXelAN/eI8SldW/hzqfyA==63MroCv46WY8NmFV' },
        contentType: 'application/json',
      });
      const quote = await info.json();
      setLoading(false);
      setData(quote);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    getQuote();
  }, []);

  if (loading) {
    return (
      <div className="quote-c">
        {' '}
        <h3>Loading ... </h3>
        {' '}
      </div>
    );
  }

  if (error) {
    return (
      <div className="quote-c">
        {' '}
        <h3>Error , quote not find </h3>
        {' '}
      </div>
    );
  }

  return (
    <div className="quote-c">
      <h2 className="text-q">{data[0].quote}</h2>
      <div className="author">
        <p>-</p>
        <h3>
          {data[0].author}
        </h3>
      </div>
    </div>
  );
};

export default Quote;
