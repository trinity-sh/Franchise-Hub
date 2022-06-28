import React from 'react'
import { Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/Navbar';
import Advertise from './pages/Advertise';
import BrandPage from './pages/BrandPage';
import BusinessSearch from './pages/BusinessSearch';
import Home from './pages/Home';
import StepNav from './pages/StepNav';

function App() {
  return (
    <>
    <NavbarComponent />
     <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/advertise-with-us-payment' element={<Advertise/>} />
       <Route path='/brands/:type' element={<BrandPage/>} />
       <Route path='/franchisor/registration/step/:id' element={<StepNav />} />
       <Route path="/business-opportunities" element={<BusinessSearch />} />
     </Routes>
    </>
  )
}

export default App;   