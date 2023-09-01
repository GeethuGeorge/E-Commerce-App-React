import React from 'react'
import { styled } from 'styled-components'


const Container=styled.div`
background-color:teal;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: 500;
height:30px;
`

const Announcement = () => {
  return (
    <Container>
   Super Deal ! Free Shipping for orders above $50
    </Container>
  )
}
export default Announcement