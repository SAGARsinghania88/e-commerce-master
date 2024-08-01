import React, { useEffect } from 'react'
import styled from 'styled-components'
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import ShieldIcon from '@mui/icons-material/Shield';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PaymentIcon from '@mui/icons-material/Payment';





const Service = () => {






  return (
    <Wrapper>

      <One> <AirportShuttleIcon className='icons' />  <div> Fast and free delivery </div> </One>

      <Two>  <ShieldIcon className='icons' />  None-contact shipping </Two>





      <Four>  <AttachMoneyIcon className='icons' />  Money-banking </Four>

      <Three> <PaymentIcon className='icons' /> Super and secure payment system</Three>



    </Wrapper>


  )
}



const Wrapper = styled.header`
margin: auto;
width: 60%;
margin-top:50px;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;

/* grid-gap: 20px; */
color: ${({ theme }) => theme.secondarybackgroundcolor};
font-size: 14px;

.icons{
 color: ${({ theme }) => theme.secondarybackgroundcolor};
font-size: 40px;

@media(max-width:800px){
  font-size:35px;

 
}

}


@media(max-width:800px){

  grid-template-columns: 1fr 1fr ;
  grid-template-rows: 100px 100px ;

  }
 
  @media(max-width:500px){
    font-size:11px;
width: 95%;
}


`





const One = styled.header`

display: flex;
/* justify-content: space-between; */
text-align: center;
flex-direction: column;
/* border: 1px solid red; */
align-items: center;
`



const Two = styled(One)`
`

const Three = styled(One)`
`

const Four = styled(One)`
`

export default Service
