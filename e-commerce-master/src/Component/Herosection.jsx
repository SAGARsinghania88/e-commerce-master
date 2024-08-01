import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import Button from './Button'
import { NavLink } from 'react-router-dom'

const Herosection = () => {





    return (


        <Container>






            <First>


                <Blur></Blur>

                <Second>

                    <span>Elec store</span>
                    <h2>India's best e commerce store </h2>


                    <NavLink to={"/filter"}>   <Button bacColor={"#e0e0e0"} />   </NavLink>




                </Second>






            </First>







        </Container>



    )
}

const Container = styled.div`
width: 100%;
height:  600px;

`

const Blur = styled.div`
position: absolute;
width: 100%;
height: 100%;
/* background: rgb(0,0,0); */
background: linear-gradient(279deg, rgba(0,0,0,0) 11%, rgba(0,0,0,0.773546918767507) 92%);

`



const First = styled.div`
background:url("/images/heroimage.jpg");
height: 100%;
background-repeat: no-repeat;
background-size: cover;
background-position: center;
width: 100%;
position: relative;
`




const Second = styled.div`
position: relative;
height: 100%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

h2{
font-size: 40px;
color: #e0e0e0;
font-family: ${({ theme }) => theme.Headertitlefont};
font-weight: 400;


@media(max-width:700px){
    font-size: 20px;
    
}


}




span{

color: #e0dfdf;
font-size: 100px;
font-weight: 300;
font-family: ${({ theme }) => theme.Headertitlefont};

@media(max-width:700px){
    font-size: 70px;
    
}
  }
 



`



export default Herosection
