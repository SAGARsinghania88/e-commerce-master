import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeSearch } from '../redux/filterstore'
import styled from 'styled-components'


const Search = () => {

    const [val, vval] = useState("")


    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(changeSearch(val))

    }, [val])



    return (
        <Container>
            <ion-icon className="searchicon" style={{ fontSize: "20px" }} name="search-outline"></ion-icon>
            <input placeholder='Search here...' type="text" onChange={(e) => vval(e.target.value)} value={val} />
        </Container>
    )
}

export default Search



const Container = styled.div`

display: flex;
align-items: center;
justify-content: space-between;
width: 100%;



input{
font-size: 15px;
height: 40px;
border: none;
width: 90%;
background-color: transparent;
}



`