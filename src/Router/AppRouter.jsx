import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Compontents/Home'
import Main from '../Compontents/Main/Main'
import Shop from '../Compontents/Shop'
import About from '../Compontents/About'
import Blog from '../Compontents/blog'
import Page from '../Compontents/Page'
import Contact from '../Compontents/Contact'


export default function AppRouter() {
  return (
    <BrowserRouter>
     <Routes>
        <Route element={<Main/>}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/pages" element={<Page/>}/>
        <Route path="/contact" element={<Contact/>}/>
        </Route>
    </Routes>
    </BrowserRouter>
    
  )
}

