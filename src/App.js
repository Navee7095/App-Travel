import React, { useState } from 'react';
import './App.css';

const mockTravelData = [
  { id: 1, destination: "Paris", price: 500 },
  { id: 2, destination: "New York", price: 700 },
  { id: 3, destination: "Tokyo", price: 800 }
];

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const filteredResults = mockTravelData.filter(item =>
      item.destination.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResults(filteredResults);
  };

  return (
    <div className="travel-app">
      <h1>Breeze Travel</h1>
      <input
        type="text"
        placeholder="Enter destination..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <div className="results">
        {results.length > 0 ? (
          results.map((item) => (
            <div key={item.id} className="result-item">
              <h3>{item.destination}</h3>
              <p>Price: ${item.price}</p>
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default App;
