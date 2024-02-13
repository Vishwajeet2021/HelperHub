
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ResetPassword from './Pages/ResetPassword';
import Home from './Pages/Home';
import PaymentPage from './Pages/PaymentPage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import About from './Pages/About';
import ContactUs from './Pages/ContactUs';
import Profile from './Pages/Profile';
import ServicesPage from './Pages/Services/Services';
import Cleaning from './Pages/Services/Cleaning';
import { useContext, useEffect } from 'react';
import { Context } from './index';
import axios from 'axios';
import {Toaster} from 'react-hot-toast'
import CitySelection from './Components/PricingMap/CitySelection';
import ServiceSelection from './Components/PricingMap/Serviceselection';
import BookingDetails from './Components/PricingMap/DetailsRegardingBooking';
function App() {
  const {setUser,setIsAuthenticated,setLoading}=useContext(Context)
  useEffect(()=>{
    setLoading(true);
    axios.get('http://localhost:4000/api/v1/userDetails',{withCredentials:true}).then(res=>{
      setUser(res.data.user);
      console.log(res.data.user)
      setIsAuthenticated(true);
      setLoading(false);
  }).catch((error)=>{
    console.log(error)
    setUser({});
    setIsAuthenticated(false);
    setLoading(false);
  })
    
  },[setIsAuthenticated,setLoading,setUser])
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path="/api/v1/password/reset/:token" element={<ResetPassword />} />
          <Route path="/paymentsuccess" element={<PaymentPage/>} />
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<ContactUs/>}/>           
          <Route path='/profile' element={<Profile/>}/>
          <Route path="/services/services" element={<ServicesPage/>}/>
          <Route path="/services/services/cleaning" element={<Cleaning/>}/>          
          <Route path="/SelectLocation" element={<CitySelection/>}/>          
          <Route path="/ServiceSelection" element={<ServiceSelection/>}/>          
          <Route path="/booking-details" element={<BookingDetails/>}/>          
        </Routes>
        <Footer/>
        <Toaster/>
      </BrowserRouter>
    </div>
  );
}

export default App;
