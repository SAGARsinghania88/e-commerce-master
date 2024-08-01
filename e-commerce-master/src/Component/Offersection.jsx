import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import FormatPrice from "./FormatPrice"
import { NavLink } from 'react-router-dom'

const Offersection = () => {


    const { allproduct } = useSelector(state => state.filter)

    const filterdata = allproduct.filter((e) => e.name === "Macbook Pro")




    return (
        <Container>


            {

                filterdata.map((e) => {

                    return (
                        <NavLink key={e.id} to={`/singleproduct/${e.id}`}>
                            <Product>

                                <div className='img-con'>
                                    <img src={e.image} alt="" />
                                </div>


                                <div className='tagline'>
                                    <div className='dealtag'>Deal of the day</div>
                                    {e.name}
                                    <div className='by'> By {e.company}  </div>
                                    <div className='price'> At  <FormatPrice price={e.price} />  </div>
                                </div>


                            </Product>
                        </NavLink>
                    )




                })







            }





        </Container>
    )
}

export default Offersection


const Container = styled.div`
    

width:80%;
margin: auto;
height: 400px;
border-radius: 11px;
overflow: hidden;
margin-top: 50px;


@media(max-width:700px){
   width: 95%;
    
}

@media(max-width:400px){

   height: 300px;
}


`

const Product = styled.div`
width: 100%;
height: 100%;
position: relative;


&:hover{

.img-con{

    transform: scale(1.06);

}

}



.img-con{
width: 100%;
height: 100%;
position: absolute;
transition: all 0.4s;


img{

width: 100%;
height: 100%;
object-fit: cover;

}



}




.tagline{
width: 100%;
height: 100%;
position: absolute;
z-index: 999;
padding: 50px;
color: white;
font-family: 'Russo One', sans-serif;
background-color: #1d1c1b73;
font-size: 77px;


@media(max-width:800px){
    font-size: 40px;
    
    
}

@media(max-width:400px){
    font-size: 40px;
    padding: 20px;
    padding-top: 40px;

    
}

.dealtag{
font-size: 22px;
margin-bottom: 20px;

@media(max-width:700px){
    font-size: 12px;
    
}


}



.by{
    font-size: 30px;

    @media(max-width:700px){
    font-size: 17px;
    
}

}


.price{
    font-size: 40px;
    margin-top: 50px;


    @media(max-width:700px){
    font-size: 25px;
    margin-top: 20px;
    
}

}

}

`