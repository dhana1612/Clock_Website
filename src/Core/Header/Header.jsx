import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
   <header className='fixed top-0 bg-white w-full'>
    <nav className="flex justify-between px-5 max-w-[105rem] mx-auto py-10 ">

      <div className="flex items-center">
        <a href= "/"><img src = "https://preview.colorlib.com/theme/timezone/assets/img/logo/logo.png"></img></a>
        <a href="Menu" className="md:hidden text-bold text-2xl px-2 ">Menu<i className="fa-solid fa-bars pl-2"></i></a>
      </div>

      <div className="hidden  md:flex gap-8 font-bold text-md ">
        <a href="/">Home</a>
        <Link to ="/shop">Shop</Link>
        <Link to ="/About">About</Link>
        <a href="/latest">Latest<span><sup className="bg-red-500 px-1 text-xs text-white rounded">Hot</sup></span></a>
        <a href="/blog">Blog</a>
        <a href="/pages">Pages</a>
        <a href="/contact">Contact</a>
      </div>



      <div className="flex items-center gap-8">
        <a href="Search"><i className="fa-solid fa-magnifying-glass"></i></a>
        <a href="user"><i className="fa-solid fa-user"></i></a>
        <a href="cart"><i className="fa-solid fa-cart-shopping"></i></a>
      </div>

    </nav>
   </header>
  )
}
