import './App.css';
import Header from './components/Header/Header';
import UserList from './components/UserList/UserList';
import UserDetail from './components/UserDetail/UserDetail';
import PaginationControl from './components/PaginationControl/PaginationControl';
import SubmitButton from './components/SubmitButton/SubmitButton';

const App = () => {

  return (
    <div className="container">
      <div className="inner">
        <Header/>
        <div className='main'>
          <UserList/>
          <UserDetail/>
        </div>
        <div className="main-bottom">
          <PaginationControl/>
          <SubmitButton/>
        </div>
      </div>
    </div>
  )
}

export default App;
