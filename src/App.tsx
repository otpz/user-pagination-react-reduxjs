import React, { useEffect } from 'react';
import './App.css';
import useFetch from './hooks/useFetch';
import User from './components/User/User';

const App = () => {
  const {data, loading, error} = useFetch('https://dummyjson.com/users')

  useEffect(() => {
    console.log(data)
  }, data)
  return (
    <div className="container">
      <User/>
    </div>
  )
}

export default App;
