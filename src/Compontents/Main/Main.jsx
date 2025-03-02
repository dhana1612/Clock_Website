import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../Core/Footer/Footer'
import Header from '../../Core/Header/Header'

export default function Main() {
  return (
    <>
    <Header/>
    <main>
        <Outlet></Outlet>
    </main>
    <Footer/>
    </>
  )
}
