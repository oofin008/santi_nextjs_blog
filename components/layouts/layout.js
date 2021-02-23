import React from 'react'
import dynamic from 'next/dynamic'

const Header = dynamic(import('./Header/header'))
const Footer = dynamic(import('./Footer/footer'))

const Layout = ({children}) => {
  return (
    <>
      <Header />
      {children}
      <Footer/>
    </>
  )
}

export default Layout;
