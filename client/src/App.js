
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Header from './Components/Header';
import Register from './Pages/Register';
import ResetPassword from './Pages/ResetPassword';
import Home from './Pages/Home';
import PaymentPage from './Pages/PaymentPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path="/api/v1/password/reset/:token" element={<ResetPassword />} />
          <Route path='/' element={<Home/>} />
          <Route path="/paymentsuccess" element={<PaymentPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
