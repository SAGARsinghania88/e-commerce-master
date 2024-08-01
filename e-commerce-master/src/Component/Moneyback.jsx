import React from 'react'
import styled from 'styled-components'



const Moneyback = () => {


    return (

        <Container>

            <div>30 Days Money Back Guarantee</div>


        </Container>



    )
}

export default Moneyback


const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-size: 30px;
margin-top: 100px;

@media(max-width:700px){
   font-size: 18px;
    
}



`