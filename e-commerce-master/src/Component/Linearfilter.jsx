import React from 'react'
import styled from 'styled-components'
import FormatPrice from './FormatPrice'
import { NavLink } from 'react-router-dom'


const Linearfilter = ({ product }) => {




    return (
        <>
            <Container>

                {


                    product.map((e) => {



                        return (
                            <NavLink key={e.id} to={`/singleproduct/${e.id}`} >
                                <ProductCon>


                                    <div className='product-img-con'> <img src={e.image} alt="" />  </div>

                                    <div className='des-con'>

                                        <div className='name' style={{ color: "black" }} >Name : {e.name}</div>
                                        <div style={{ color: "black" }}> Price : <FormatPrice price={e.price} />  </div>
                                        <div style={{ color: "black" }}> Company : {e.company}</div>
                                        {/* <div className='des'>{e.description}</div> */}

                                    </div>




                                </ProductCon>
                            </NavLink>
                        )


                    })




                }
            </Container>
        </>
    )
}

const Container = styled.div`
    


display: grid;
grid-row-gap: 50px;


@media(max-width:800px){

    grid-row-gap: 30px;

}




`
const ProductCon = styled.div`
    
/* border: 1px solid red; */
display: grid;
grid-template-columns: 250px 1fr;
grid-column-gap: 50px;



@media(max-width:800px){

    grid-template-columns: 150px 1fr;
    grid-column-gap: 20px;


}


.des-con{



line-height: 35px;



@media(max-width:800px){


font-size: 12px;
line-height: 25px;
}






    .des{
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
max-width: 600px;
color: grey;





    }

.name{ 

    font-size: 20px;
font-weight: 600;


@media(max-width:800px){


    font-size: 14px;

}


}

}







.product-img-con{

overflow: hidden;
border-radius: 11px;


img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

}







`

export default Linearfilter
