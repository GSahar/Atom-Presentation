import logo from './image/logo.svg';
import './App.css';
import axios from 'axios';
import React, { useState } from 'react';




function App() {
  const [items, setItems] = useState(null);


  const apiURL = "http://localhost:5000/items/";

    const fetchData = async () => {
     const response = await axios.get(apiURL)
     console.log(response.data)
     setItems(response.data)
   } 
   if (!items) {
    fetchData();
   }

   console.log(items);
 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      </header>
      <body>

      </body>
    </div>
  );
}

export default App;
