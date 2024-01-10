
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import Header from './Components/Header';
import Register from './Pages/Register';
import Account from './Pages/Account';

function App() {
  return (
    <div className="App">
      
      
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/account' element={<Account/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
