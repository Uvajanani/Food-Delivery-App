import React, { useState } from 'react'
import Navbar from './components/NavBar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/Place Order/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopUp/LoginPopup'
import Verify from './pages/Verify/verify'
import MyOrders from './pages/MyOrders/MyOrders'

const App = () => {

  const[showLogin, setshowLogin] = useState(false)

  return (
    <>
      {showLogin ? <LoginPopup setshowLogin = {setshowLogin}/> : <></>}
      <div className='app'>
        <Navbar setshowLogin = {setshowLogin}/>
        <Routes>
          <Route path = '/' element = {<Home/>}/>  
          <Route path = '/cart' element = {<Cart/>}/>
          <Route path = '/order' element = {<PlaceOrder/>}/>
          <Route path = '/verify' element = {<Verify/>}/>
          <Route path = '/myorders' element = {<MyOrders/>}/>
        </Routes>     
      </div>
      <Footer/>
    </>
  )
}

export default App


