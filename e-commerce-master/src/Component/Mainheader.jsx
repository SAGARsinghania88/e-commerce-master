import React from 'react'
import styled from 'styled-components'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Badge from '@mui/material/Badge';
import SortIcon from '@mui/icons-material/Sort';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Mainheader = () => {

    const { data } = useSelector(state => state.cart)



    const totalcartquantity = data.reduce((total, current) => {

        return total + current.quantity


    }, 0)






    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };






    return (
        <>

            <Header>




                <HeaderWrapper>
                    <First

                    >

                        <  SortIcon style={{ fontSize: "25px", cursor: "pointer" }}
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        />

                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem style={{ color: "black" }} onClick={handleClose} >Home</MenuItem>
                            <Link to={"/filter"}>        <MenuItem style={{ color: "black" }} onClick={handleClose} >Products</MenuItem>  </Link>
                            <MenuItem onClick={handleClose}  >Logout</MenuItem>
                        </Menu>








                    </First>


                    {/* {{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}} */}


                    <Link to={"/"}>
                        <Second>

                            Elec Store

                        </Second>
                    </Link >
                    {/* {{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}} */}



                    <Third>


                        <IconWrapper>


                            <NavLink to="/cart" >
                                <Totalcartnumber badgeContent={totalcartquantity}  >
                                    <ShoppingBagOutlinedIcon className="shopcarticon" style={{ fontSize: "23px" }} />

                                </Totalcartnumber>
                            </NavLink>

                        </IconWrapper>



                    </Third>

                </HeaderWrapper>





            </Header>



        </>
    )
}


const Header = styled.header`
width: 100%;
background-color: #ebebeb;
border-bottom: 1px solid black;
height: 55px;
`




const HeaderWrapper = styled.div`
    display: grid;
grid-template-columns: 1fr 4fr 1fr;
margin: auto;
width: 90%;
height: 55px;
border-bottom: 1px solid black;


`




const IconWrapper = styled.div`
width:80px ;
display: flex;
justify-content: flex-end;




.shopcarticon{

    color: black;
  
}


@media(max-width:600px){
   width:60px;

    
}

`





const First = styled.header`
display: flex;
align-items: center;
justify-content: flex-start;


`



const Second = styled.header`
font-family: ${({ theme }) => theme.Headertitlefont};
color: black;
font-size: 25px;
font-weight: 500;
display: grid;
justify-items: center;
font-weight: 600;
letter-spacing: 5px;
align-items: center;
width: 100%;
height: 100%;


@media(max-width:600px){
    font-size: 20px;

    
}


`




const Third = styled.header`
display: flex;
justify-content: flex-end;
align-items: center;



`






const Totalcartnumber = styled(Badge)({
    "& .MuiBadge-badge": {
        color: "white",
        backgroundColor: "black"
    }
});


export default Mainheader
