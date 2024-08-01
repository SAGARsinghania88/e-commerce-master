import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import FormatPrice from './FormatPrice'
import { NavLink } from 'react-router-dom'




const Gridfilter = ({ product }) => {


    const { isloading } = useSelector(state => state.filter)
    const { filterdata } = useSelector(state => state.filter)


    if (isloading) {

        return <h1>loading</h1>

    }


    if (filterdata.length === 0) {

        return <div>No product to match</div>

    }


    return (

        <Container>

            {



                product.map((e) => {





                    return (
                        <NavLink key={e.id} to={`/singleproduct/${e.id}`}>
                            <PorductContainer>
                                <div className='img-con'>
                                    <img src={e.image} alt="" />
                                </div>
                                <div className='productInfoContainer'>  <div className='name'>{e.name}</div> <div>{e.company}</div>    <div className='price'>  <FormatPrice price={e.price} />   </div>   </div>
                            </PorductContainer>

                        </NavLink>
                    )

                })



            }


        </Container>


    )
}

export default Gridfilter



const Container = styled.div`
    
display: grid;
grid-template-columns:repeat(3, 280px ) ;
justify-content: space-between;


@media(max-width:900px){

    grid-template-columns:repeat(2, 280px ) ;

}

@media(max-width:600px){

grid-template-columns:repeat(2, 150px ) ;


}


`

const PorductContainer = styled.div`
margin-bottom: 50px;
/* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
/* border-radius:20px; */
overflow: hidden;
cursor: pointer;


@media(max-width:600px){
    margin-bottom: 20px;

}


.img-con{

width: 100%;
height: 200px;
overflow: hidden;
border-radius: 11px;


@media(max-width:600px){


height: 110px;

}




img{

    object-fit: cover;
    width: 100%;
    height: 100%;
    transition: all 0.3s;
}



&:hover{

img{

transform: scale(1.07);

}

}





}


.productInfoContainer{


display: flex;
justify-content: space-between;
padding: 10px 0px 10px 0px;
font-size: 15px;
min-height: 75px;
align-items: flex-start;
flex-direction: column;
color: black;
padding-left: 5px;

@media(max-width:600px){

font-size: 12px;


}



.name{
font-weight: 600;
font-size: 20px;

@media(max-width:600px){

    font-size: 16px;


}





}

.price{
color: grey;

}




}




    
`

