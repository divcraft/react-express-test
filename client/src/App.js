import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState({})
  useEffect(() => {
    fetch('http://localhost:5000/api')
      .then(response => response.json())
      .then(data => setData({
        name: data.name,
        surname: data.surname
      }))
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        {data.name} {data.surname}
      </header>
    </div>
  );
}

export default App;
