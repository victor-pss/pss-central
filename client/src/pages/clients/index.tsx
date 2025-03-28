import { useState, useEffect } from 'react';
import Table from '../../components/tables';

interface Client {
  _id: String,
  name: String,
  clientCode: String,
  email: String,
  status: String,
  created_at: Date,
  updated_at: Date
}

interface AllClients {
  Clients: Client[]
}

const Clients = () => {
  const [clients, setClients] = useState<AllClients | null>(null);

  useEffect(() => {
    const getAllClients = async () => {
      const allClients = await fetch('http://localhost:5001/api/db/clients');
      const data = await allClients.json();
      setClients(data);

    };
    
    getAllClients();

  }, []);

  return (
    <>
        <Table />
    </>
  )
}

export default Clients;
