import React from 'react'
import styled from 'styled-components'


const Button = ({bacColor}) => {
  return (
    <Container bacColor={bacColor}>


      Shop Now

    </Container>
  )
}

const Container = styled.div`
width: 150px;
display: flex;
justify-content: center;
height: 50px;
color: black;
border-radius: 30px;
align-items: center;
margin-top: 20px;
background-color: ${({ bacColor }) => bacColor};
cursor: pointer;

@media(max-width:800px){
  margin-top:10px;
    
}


`

export default Button
