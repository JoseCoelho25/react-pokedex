import React  from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'


function MainLayout({children, isCardLoaded}) {
  

  return (
    <div className="MainLayout">
      <Navbar />
      <main>{children}</main>
      <Footer isCardLoaded={isCardLoaded}/>
    </div>
  )
}

export default MainLayout