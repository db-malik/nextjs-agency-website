import React, { Children } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

export const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
