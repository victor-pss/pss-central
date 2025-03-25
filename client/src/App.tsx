import { useState, useEffect } from 'react'

function App() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetch('/api')
      .then((req:any, res:any) => res.data)
      .then((data:any) => setMessage(data.message));
  }, []);

  console.log(message);

  return (
    <>
      {message}
    </>
  )
}

export default App
