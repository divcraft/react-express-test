import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState({})
  const fullYear = new Date().getFullYear()
  useEffect(() => {
    fetch('/api')
      .then(response => response.json())
      .then(data => setData({
        name: data.name,
        surname: data.surname
      }))
      .catch(err => console.log(err))
  }, [])
  const { name, surname } = data
  console.log(data)
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello world</h1>
        <div>{name} {surname}</div>
        <br />
        <code>{fullYear}</code>
      </header>
    </div>
  );
}

export default App;
