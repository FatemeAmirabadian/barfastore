import React from 'react'
import Header from '../modules/Header'
import Footer from '../modules/Footer'

const PublicLayout = ({children}) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default PublicLayout
