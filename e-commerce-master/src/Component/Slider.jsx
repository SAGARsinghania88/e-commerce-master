import React, { useState } from 'react'
import styled from 'styled-components'


const Slider = () => {

    const [num, nnnum] = useState(0)

    const arr = [1, 2, 3]


    const move = (arrow) => {


        if (arrow == "right") {


            num < 2 ? nnnum(num + 1) : nnnum(0)


        }


        if (arrow == "left") {


            num  > 0 ? nnnum(num  - 1) : nnnum(2)


        }






    }



    return (

        <Wrapper>

            <Carosel num={num}>
                {


                    arr.map((e) => {
                        return (
                            <Container>
                                {e}


                            </Container>
                        )
                    })
                }



            </Carosel>



            <div onClick={() => move("left")} className='left a'>left</div>
            <div onClick={() => move("right")} className='right a'>right</div>
        </Wrapper>





    )
}


const Wrapper = styled.div`
width: 100%;
height: 100vh;

.a{

position: absolute;
top: 50%;
font-size: 40px;
border: 1px solid red;
}
.right{
right: 0%;


}


.left{
left: 0%;


}

`

const Carosel = styled.div`
width: 300vw;
height: 100%;
display: flex;
transform:   translateX( ${({ num }) => num * -100}vw  ) ;

border: 1px solid red;
`

const Container = styled.div`
width: 100vw;
height: 100%;
font-size: 111px;
border: 1px solid red;

`
export default Slider
