import React, { useEffect } from 'react';
import './App.css';
import useFetch from './hooks/useFetch';
import Header from './components/Header/Header';
import UserList from './components/UserList/UserList';
import UserDetail from './components/UserDetail/UserDetail';

const App = () => {
  const {data, loading, error} = useFetch('https://dummyjson.com/users')

  useEffect(() => {
    console.log(data)
  }, data)
  return (
    <div className="container">
      <div className="inner">
        <Header/>
        <div className='main'>
          <UserList/>
          <UserDetail/>
        </div>
      </div>
    </div>
  )
}

export default App;
