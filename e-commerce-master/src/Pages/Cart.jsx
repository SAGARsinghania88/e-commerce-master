import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import Counter from '../Component/Counter'
import { addquantity } from '../redux/cartstore'
import { subquantity } from '../redux/cartstore'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { removeparticularitem } from '../redux/cartstore'
import FormatPrice from '../Component/FormatPrice'



const Cart = () => {

  const { data } = useSelector(state => state.cart)

  const dispatch = useDispatch()

  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<cart add and sub function
  const add = (id) => {

    dispatch(addquantity(id))


  }


  const sub = (id) => {

    dispatch(subquantity(id))

  }
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>





  // {{{{{{{{{{{{{remove item from cart}}}}}}}}}}}}}


  const remove = (id) => {


    dispatch(removeparticularitem(id))

  }


  // >>>>>>>>>>>>>>>>>>>>>>>>>>

  const totalcartquantity = data.reduce((total, current) => total + current.quantity * current.price, 0)




  // >>>>>>>>>>>>>>>>>


  const percentageCalc = () => parseInt(totalcartquantity / 100 * 5)


  const perResult = percentageCalc()






  // >>>>>>>>>>>>>>>>>>>>>>


  const totalPrize = () => totalcartquantity - perResult + 200


  const totalPrizee = totalPrize()


  // <<<<<<<<<<<<<<<<<<<<

  const totalcartiteam = data.reduce((accu, crun) => accu + crun.quantity, 0)



  // <<<<<<<<<<<<<<<<<<<<<<<







  if (data.length === 0) {

    return <Svgcontainer>


      <div className='tagline'>No item on Cart</div>

      <img src="/images/emptycart.svg" alt="sss" />



    </Svgcontainer>



  }


  return (


    <>

      <Toptagline>You have {totalcartiteam} items</Toptagline>


      <Totalcartcontainer>

        <Wrapper>



          {
            data && data.map(({ quantity, image, price, uniqueid, name, color }, i) => {

              return (
                <div key={i} className='cartproduct-container'>




                  <div className='col-one' >
                    <img src={image} alt="" />
                  </div>



                  <div className='col-two' >
                    {/* <<<<<<<<<<<<<<<<<<< */}
                    <div className='name'>  {name} </div>
                    {/* <<<<<<<<<<<<<<<<<<<<<<< */}
                    <Color c={color}></Color>
                    {/* <<<<<<<<<<<<<<<<<<<<<<<<<< */}
                    <div className='price' >  Price : <FormatPrice price= {price}/> </div>
                    <div className='subtotal'> Subtotal :  <FormatPrice price= { quantity * price} /> </div>
                    <Counter margintop={"5px"} state={quantity} add={add} sub={sub} uniqueid={uniqueid} />
                  </div>



                  <div className='col-three'>
                    <Cross className='removeicon' onClick={() => remove(uniqueid)} />
                  </div>
                  {/* <<<<<<<<<<<<<<<<<< */}

                  {/* <<<<<<<<<<<<<<<<<< */}

                  {/* {{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}} */}






                </div>


              )


            })

          }





        </Wrapper>








        {/* {{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}} */}







        <Subtotal>

          <div style={{ fontSize: "33px" }}>ORDER SUMMERY</div>

          <div className='checkoutcss'>

            <div> Subtotal of all product   </div>

            <div>  <FormatPrice price=  { totalcartquantity}/> </div>

          </div>



          {/* {{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}} */}



          <div className='checkoutcss'>

            <div> discount   </div>

            <div>   - 5 %  </div>


          </div>



          {/* {{{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}}} */}



          <div className='checkoutcss'>

            <div>Shipping fee    </div>

            <div><FormatPrice price=  {200}/> </div>


          </div>



          {/* {{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}} */}



          <div className='checkoutcss'>

            <div style={{ fontWeight: "600", fontSize: "28px" }}>Total    </div>

            <div style={{ fontWeight: "600", fontSize: "28px" }}>  <FormatPrice price=  {  totalPrizee}/> </div>


          </div>



          <div className='checkoutBtn'> Check out Now</div>

        </Subtotal>





      </Totalcartcontainer>

    </>

  )
}




// {{{{{{{{{{{{{{NO CART CSS}}}}}}}}}}}}}}






const Svgcontainer = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: column;
height: 600px;
overflow-x: hidden;

img{
  width: 300px;
}


.tagline{

  font-size: 34px;
  font-weight: 500;
}

`


// {{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}



const Toptagline = styled.div`
  
text-align: center;
margin-top: 60px;
font-size: 20px;

`




const Totalcartcontainer = styled.div`
  
/* border: 1px solid red; */
display: flex;
justify-content: space-between;
margin: auto;
width: 90%;
margin-top: 40px;



@media(max-width:1400px){
flex-direction: column;
}





`



const Wrapper = styled.div`

height: 500px;
overflow-y: scroll;
padding-top: 0px;
width: 60%;
padding-right: 50px;
overflow-x: hidden;



@media(max-width:1400px){

  width: 100%;

}


@media(max-width:700px){

  overflow-y: hidden;
  padding-right: 0px;
  height: auto;
  padding-bottom: 20px;
}









.cartproduct-container{
width: 100%;
display: grid;
height: 200px;
grid-template-columns:  290px  1fr 30px;
margin-top: 30px;
grid-gap: 40px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;




@media(max-width:700px){
  grid-template-columns:  100px  1fr 25px;
  margin-top: 50px;
  height: 200px;

}


@media(max-width:500px){
  height: 160px;
  grid-template-columns:  100px  1fr 25px;
  grid-gap: 10px;
}






img{

  width: 100%;
  height: 100%;
  
  @media(max-width:700px){

/* overflow-y: hidden; */

height: auto;
}



  
}



.name{
  font-size: 25px;
  font-weight: 500;
  letter-spacing: 2px;
  @media(max-width:500px){
    font-size: 15px;

}


}


.price{
  font-size: 15px;
  font-weight: 00;
 
  @media(max-width:500px){
    font-size: 12px;
    margin-top: 10px;
}



}


.subtotal{
  font-size: 15px;
  font-weight: 400;
  margin-top: -10px;


  @media(max-width:500px){
    font-size: 12px;
    margin-top: 10px;


}



}

.removeicon{

  cursor: pointer;

  height: 100%;
  &:hover{

    color: red;
  }
}



}





.col-two{

  display: flex;
  flex-direction: column;
  align-items: flex-start;
justify-content: space-between;
height: 90%;
/* border: 1px solid red; */


 
@media(max-width:500px){
  /* align-items: center; */
  justify-content: center;
  margin-left: 20px;
}

}








`






const Color = styled.div`
  
background-color: ${({ c }) => c};
border-radius:30px;
overflow: hidden;
width: 13px;
height: 13px;
border: 1px solid grey;

@media(max-width:500px){
    /* font-size: 12px; */
    margin-top: 10px;
    width: 10px;
}


`



const Cross = styled(CloseRoundedIcon)`
  

display: flex;
justify-content: center;
align-items: center;
font-size: 30px;
color: black;

  @media(max-width:500px){
    font-size: 1px;

}


  
`














/* {{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}} */


const Subtotal = styled.div`
font-size: 18px;
width: 410px;




@media(max-width:1400px){

margin-top: 100px;
}


@media(max-width:500px){
    font-size: 12px;
    
    width: 250px;

}



.checkoutcss{

display: flex;
width: 100%;
justify-content: space-between;
/* border: 1px solid red; */
margin-top: 20px;

}



.checkoutBtn{

/* border: 1px solid red; */
text-align: center;
margin-top: 40px;
background-color: black;
color: white;
height: 50px;
display: flex;
align-items: center;
justify-content: center;
letter-spacing: 5px;
cursor: pointer;


@media(max-width:500px){
  letter-spacing: 4px;

}



}



`


export default Cart
