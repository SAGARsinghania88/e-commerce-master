import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProduct } from '../redux/productstore';
import { useEffect } from 'react';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";

const Featuredprouct = () => {

  const dispatch = useDispatch()


  useEffect(() => {

    dispatch(fetchProduct())


  }, [])


  const { featuredata, isloading } = useSelector(state => state.product)




  if (isloading) {

    return "loading"

  }



  return (

    <Wrapper>

      {
        featuredata.map((e, i) => {

          return (
            <NavLink key={i} to={`/singleproduct/${e.id}`}>

              <div className={`boxes`} >
                <div className='overlay'>

                  <div className='product-name'>{e.name}</div>
                </div>

                <img src={e.image} alt="" />

              </div>

            </NavLink>


          )


        })



      }


    </Wrapper>

  )
}


const Wrapper = styled.header`
width: 80%;
margin: auto;
margin-top: 50px;
display:flex;
justify-content:space-between;




@media(max-width:800px){

flex-direction: column;
width: 95%;
grid-gap: 10px;
}




.boxes{
position: relative;
overflow: hidden;
border-radius: 11px;
cursor: pointer;
height: 240px;
width:100%;


@media(max-width:800px){

  height: 170px;


}


&:hover{
  
  .overlay{
  
  background-color: #090a0a2d;

}

 

}

.product-name{
  transition: all 0.3s;
  font-size: 25px;
font-weight: 400;
font-family: 'Russo One', sans-serif;

  @media(max-width:800px){

font-size: 15px;


}


}



img{
object-fit: cover;
height: 100%;
width: 100%;

}



.overlay{
  
  /* background-color: #090a0a3d; */
position: absolute;
top: 0px;
left: 0px;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
color: #ffffff;
font-size: 30px;
z-index:999;
font-weight: 600;
transition: all 0.3s;
}




}






`





export default Featuredprouct




