import { createSlice } from '@reduxjs/toolkit'

export const singledataStore = createSlice({

  name: 'singleproduct',

  initialState: {
    singleproductdata: {},
    isloading: true,


  },




  reducers: {

    fetchsingleproduct(state, action) {

      return {
        ...state,
        singleproductdata: action.payload,


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


export const { fetchsingleproduct, isloading, errors } = singledataStore.actions

export default singledataStore.reducer

// thunk



export function fetchSingleProduct(id) {

  return async function fetchSingleProductThunk(dispatch) {

    dispatch(isloading(true))

    try {

      let data = await fetch(`https://api.pujakaitem.com/api/products/${id}`)

      let fetchdata = await data.json()



      dispatch(fetchsingleproduct(fetchdata))



      dispatch(isloading(false))


    } catch (eror) {

      console.log(eror)

      dispatch(errors())


    }

  }


}
