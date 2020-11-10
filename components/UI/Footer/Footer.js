import React from 'react'

import { Container, Brand, DevelopedBy } from '../../../styles/components/UI/Footer/Footer'

const Footer = () => {
  return (
    <Container>
      <Brand>&copy; {`${new Date().getFullYear()} Email Client`}</Brand>
      <DevelopedBy>Developed by <a href='https://github.com/Davi-Silva' target='_blank' rel="noopener noreferrer">Davi Silva</a></DevelopedBy>
    </Container>
  )
}

export default Footer
