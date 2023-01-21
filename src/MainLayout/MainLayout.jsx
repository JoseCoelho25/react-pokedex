import React from 'react'
import Navbar from '../Components/Navbar'

function MainLayout({children}) {
  return (
    <div className="MainLayout">
      <Navbar/>
      <main>{children}</main>
    </div>
  )
}

export default MainLayout