import React from 'react'
import styled from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';



const Addtocartbutton = ({ add }) => {

 

  return (
    <Button onClick={add} >

      <ShoppingCartOutlinedIcon /> Add to cart

    </Button>
  )
}

const Button = styled.div`
    
    background-color: ${({ theme }) => theme.secondarybackgroundcolor};
display: flex;
justify-content:space-between;
align-items: center;
width: 140px;
color: white;
height: 50px;
border-radius: 40px;
margin-top: 30px;
padding: 18px;
font-size: 13px;
cursor: pointer;
transition:  0.4s ;


&:hover{

  color: #b4b4b4;

}
`

export default Addtocartbutton
