import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Clients from './pages/clients';

interface data {
  message: string
}

function App() {
  //const [message, setMessage] = useState<data | null>(null);
  //
  //useEffect(() => {
  //  async function firstCall() {
  //    try {
  //      const response:any = await fetch('http://localhost:5001/api');
  //      if (!response.ok) {
  //        throw new Error(`HTTP error: , ${response.status}`);
  //      }
  //      const data:any = await response.json();
  //      setMessage(data);
  //      console.log(data);
  //    } catch(error) {
  //      console.error('Error message: ', error);
  //    }
  //  }
  //
  //  firstCall();
  //}, []);

  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clients" element={<Clients />} />
      </Routes>
    </>
  )
}

export default App
