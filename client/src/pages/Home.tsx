import { useState, useEffect } from 'react';

const Home = () => {
  const [message, setMessage] = useState<String | null>(null);

  useEffect(() => {
    setMessage('This is the Home Page');
  }, []);

  return (
    <>
      {message}
    </>
  )


}

export default Home;
