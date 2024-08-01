import React, { useState } from 'react'
import styled from 'styled-components'
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';







const counter = ({ margintop, state, add, sub, uniqueid }) => {








    // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<currennt quantity




    return (
        <Wrapper top={margintop}>



            <div className='box clickbox' onClick={() => sub(uniqueid)}>
                <Remove  style={{fontSize:"21px"}} />

            </div>





            <div className='box '>
                {

                    state


                }

            </div>






            <div className='box clickbox' onClick={() => add(uniqueid)}>
                <Add style={{fontSize:"21px"}} />
            </div>







        </Wrapper>




    )
}


export default counter


const Add = styled(AddRoundedIcon)`
    

`

const Remove = styled(RemoveRoundedIcon)`
    



`


const Wrapper = styled.div`
width: 110px;
height: 45px;
display: grid;
grid-template-columns: repeat(3,1fr);
border-radius: 30px ;
overflow: hidden;
margin-top: ${({ top }) => top};


@media(max-width:500px){
    width:90px;
height: 40px;
margin-top: 15px;
}


.box{

    display: flex;
    justify-content: center;
    align-items: center;

}


.clickbox{
    background-color: ${({ theme }) => theme.secondarybackgroundcolor};
color: white;

&:hover{

color: #b4b4b4;
cursor: pointer;
}


}

`


