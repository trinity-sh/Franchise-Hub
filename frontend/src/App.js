import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Advertise from './pages/Advertise';
import BrandPage from './pages/BrandPage';
import Home from './pages/Home';

function App() {
  return (
    <>
     <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/advertise-with-us-payment' element={<Advertise/>} />
       <Route path='/brands/:' element={<BrandPage/>} />
     </Routes>
    </>
  )
}

export default App;   