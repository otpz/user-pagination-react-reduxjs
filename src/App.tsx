import React, { useEffect } from 'react';
import './App.css';
import useFetch from './hooks/useFetch';

const App = () => {
  const {data, loading, error} = useFetch('https://dummyjson.com/users')

  useEffect(() => {
    console.log(data)
  }, data)
  return (
    <div className="container">
    
    </div>
  )
}

export default App;
