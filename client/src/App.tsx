import { Routes, Route  } from 'react-router-dom';

import Home from './pages/Home';
import Clients from './pages/clients';
import Client from './pages/clients/single';

function App() {

  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clients/:id" element={<Client />} />
        <Route path="/clients" element={<Clients />} />
      </Routes>
    </>
  )
}

export default App
