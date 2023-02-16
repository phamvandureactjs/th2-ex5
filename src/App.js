import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const Loading = () => {
    return (
      <div class="loader"></div>
    );
  };
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, [5]);

  return (
    <div className='container'>
      {isLoading && <Loading />}
    </div>
  );
}

export default App;
