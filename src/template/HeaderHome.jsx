import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const HeaderHome = () => {
  return (
    <>
        <Header></Header>
        <div className="container p-5" style={{minHeight: 750}}>
            <Outlet></Outlet>
        </div>
        <Footer></Footer>
    </>
  )
}

export default HeaderHome