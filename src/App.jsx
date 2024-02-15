import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Nopage from './pages/Nopage'
import Cart from './pages/Cart'
import Details from './pages/Details'
import Category from './pages/Category'
import ScrollToTop from './ScrollToTop'
import './index.js'
function App() {
  return (
    <>
    <BrowserRouter>
    <ScrollToTop/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/category/:cid/' element={<Category/>}/>
        <Route path='/details/:id/' element={<Details/>}/>
        <Route path='*' element={<Nopage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App