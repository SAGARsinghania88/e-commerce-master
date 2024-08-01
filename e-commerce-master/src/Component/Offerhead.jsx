import React from 'react'
import styled from 'styled-components'

const Offerhead = () => {
  return (
    <>

      <Header>



        Holiday Offer Get 30% off in Phones





      </Header>






    </>
  )
}

const Header = styled.header`
color: #dddddd;
background-color: ${({theme})=> theme.secondarybackgroundcolor};
height: 30px;
display: flex;
justify-content: center;
align-items: center;
font-size: 11px;
font-weight: 800;
`





export default Offerhead
