import { createSlice } from '@reduxjs/toolkit'
import { add } from "../redux/filterstore"


export const dataStore = createSlice({
  name: 'product',
  initialState: {
    data: [],
    featuredata: [],
    isloading: true,
    error: false
  },




  reducers: {

    totaldata(state, action) {

      const data = action.payload.filter((e) => e.featured === true)
      
      return {
        ...state,
        data: action.payload,
        featuredata: data,


      }



    },


    isloading(state, action) {

      return {
        ...state,
        isloading: action.payload
      }


    },

    errors() {


      return {
        ...state,
        error: true,
        isloading: true
      }



    }
  





  }
})


export const { totaldata, isloading, errors  } = dataStore.actions

export default dataStore.reducer




// thunk



export function fetchProduct() {

  return async function fetchProductThunk(dispatch) {


    try {

      let data = await fetch(`https://api.pujakaitem.com/api/products`)

      let fetchdata = await data.json()



      dispatch(totaldata(fetchdata))

      dispatch(add(fetchdata))



      dispatch(isloading(false))


    } catch (eror) {

      // console.log(eror)

      // dispatch(errors())


    }

  }


}

