import React from 'react'

import { LayoutDiv } from '../../styles/components/UI/Layout'
import Footer from '../UI/Footer/Footer'

const Layout = ({ children }) => {
  return (
    <LayoutDiv>
      {children}
      <Footer />
    </LayoutDiv>
  )
}

export default Layout
