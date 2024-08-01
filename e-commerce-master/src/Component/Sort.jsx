import React, { useEffect } from 'react'
import { useState } from 'react'
import { SortingOrder } from '../redux/filterstore';
import { useDispatch } from 'react-redux';
import { display } from '@mui/system';







const Sort = () => {

    const [sorting, ssorting] = useState("")

    const dispatch = useDispatch()


    useEffect(() => {

        dispatch(SortingOrder(sorting))

    }, [sorting])




    return (
        <>
            <label  >Sorting :</label>

            <select  style={{width:"100px"}}  onChange={(e) => ssorting(e.target.value)} name="cars" id="cars">


            <option  >Choose</option>
                <option  value="Price-high">Price high to low</option>
                <option value="Price-low">Price low to high</option>
                <option value="Ascending-order">Ascending order</option>
                <option value="Descending-order">Descending order</option>
            </select>

        </>
    )
}

export default Sort
