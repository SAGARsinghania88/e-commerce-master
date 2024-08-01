import { createSlice } from '@reduxjs/toolkit'
import { ToastContainer, toast } from 'react-toastify';


export const cartstore = createSlice({
  name: 'scart',
  initialState: {
    data: []


  },




  reducers: {

    addtocart(state, action) {


      let { singleproductdata, currentstock, selectedcolor } = action.payload

      let indexnum = state.data.findIndex((e) => e.uniqueid === singleproductdata.id + selectedcolor)

      if (indexnum >= 0) {

        if (state.data[indexnum].quantity >= state.data[indexnum].maxstock) {

          toast.warn("limit reach")

        } else {

          state.data[indexnum].quantity += 1

          toast.success("Item add in cart")
        }




      } else {


        let product = {
          name: singleproductdata.name,
          image: singleproductdata.image[0].url,
          color: selectedcolor,
          price: singleproductdata.price,
          quantity: currentstock,
          uniqueid: singleproductdata.id + selectedcolor,
          maxstock: singleproductdata.stock,




        }

        toast.success("Item add in cart")

        return {

          ...state,
          data: [product, ...state.data],


        }



      }

    },



    addquantity(state, action) {



      let indexnum = state.data.findIndex((e) => e.uniqueid === action.payload)



      if (state.data[indexnum].quantity >= state.data[indexnum].maxstock) {


        toast.warn("limit reach")

      } else {

        state.data[indexnum].quantity += 1

      }



    }

    ,


    subquantity(state, action) {

      let indexnum = state.data.findIndex((e) => e.uniqueid === action.payload)


      if (state.data[indexnum].quantity <= 1) {


        toast.warn("Please Click delete(Cross icon) for remove this item")

        // const filterdata = state.data.filter((e) => e.uniqueid !== state.data[indexnum].uniqueid)




        // return {
        //   ...state,
        //   data: filterdata,

        // }





      } else {

        state.data[indexnum].quantity -= 1

      }




    },



    removeparticularitem(state, action) {


      let indexnum = state.data.findIndex((e) => e.uniqueid === action.payload)



      const filterdata = state.data.filter((e) => e.uniqueid !== state.data[indexnum].uniqueid)


      return {

        ...state,
        data: filterdata,


      }

    }




  }
})

export const { addtocart, addquantity, subquantity, removeparticularitem } = cartstore.actions

export default cartstore.reducer