import React from 'react'
import styled from 'styled-components'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <Container>

            <div className='tagline'>Elec store</div>
            <p>Elec store is a electronic website where you find great product
                for your life
            </p>

            <div className='icon-wrapper'>    <div className='icon'>  <TwitterIcon /> </div>     <div className='icon'>  <InstagramIcon />  </div>    <div className='icon'>  <FacebookIcon />  </div>    <div className='icon'>    <LinkedInIcon />   </div>      </div>

        </Container>
    )
}

export default Footer

const Container = styled.div`
    
width: 100%;
height: 200px;
background-color: #1e1d1d;
color: white;
padding: 30px;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 50px;
border-radius: 20px 20px 0px 0px;





.tagline{
font-size: 30px;


@media(max-width:700px){

font-size: 25px;


}


}

p{
    text-align: center;
max-width: 450px;
font-size: 13px;


    @media(max-width:700px){

font-size: 10px;


}



}

.icon-wrapper{

color: white;
width: 200px;
display: flex;
justify-content: space-between;
margin-top: 35px;




.icon{
    transition: all 0.4s;
cursor: pointer;

    &:hover{

color: #c9c9c9;

}

}



}
`