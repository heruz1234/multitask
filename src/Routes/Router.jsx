import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from '../Pages/Home'
import Cart from '../Pages/Cart'
import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp'
import SIngle from '../Pages/SIngle'

export default function Router() {
  return (
    <div>
      <BrowserRouter >
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/single/:id" element={<SIngle />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
