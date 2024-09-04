import './App.css';
import Header from './components/Header/Header';
import UserList from './components/UserList/UserList';
import UserDetail from './components/UserDetail/UserDetail';

const App = () => {

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
