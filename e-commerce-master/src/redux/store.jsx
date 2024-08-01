import { configureStore } from '@reduxjs/toolkit'
import productstore from '../redux/productstore'
import singleproductdata from '../redux/singleproductdata'
import cartstorage from '../redux/cartstore'
import filterstore from "../redux/filterstore"

export default configureStore({
    reducer: {

     product: productstore,
     single: singleproductdata,
     cart:cartstorage,
     filter:filterstore

    }
})