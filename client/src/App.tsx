import { useState, useEffect } from 'react'

interface data {
  message: string
}

function App() {
  const [message, setMessage] = useState<data | null>(null);

  useEffect(() => {
    async function firstCall() {
      try {
        const response:any = await fetch('http://localhost:5001/api');
        if (!response.ok) {
          throw new Error(`HTTP error: , ${response.status}`);
        }
        const data:any = await response.json();
        setMessage(data);
        console.log(data);
      } catch(error) {
        console.error('Error message: ', error);
      }
    }

    firstCall();
  }, []);

  return (
    <>
      {message && message.message}
    </>
  )
}

export default App
