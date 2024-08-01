import React from 'react'
import styled from 'styled-components'


const Tagline = ({ line }) => {
    return (
        <Wrapper>

            <div className='line'>{line} </div>



        </Wrapper>


    )
}

const Wrapper = styled.div`
    
font-size: 40px;
margin: auto;
margin-top: 100px;
width: 90%;
color: #5b5c5c;
font-weight: 200;


.line{
display: flex;
align-items: center;
justify-content: center;

}


@media(max-width:500px){

    margin-top: 30px;
    font-size: 30px;
}



`

export default Tagline
