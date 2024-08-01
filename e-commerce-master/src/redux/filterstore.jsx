import { createSlice } from '@reduxjs/toolkit'

export const filterstore = createSlice({

  name: 'filterproduct',

  initialState: {
    filterdata: [],
    allproduct: [],
    gridview: true,
    isloading: true,
    searchText: "",



  },




  reducers: {

    add(state, action) {


      // const newData = action.payload.sort()
      // console.log(action.payload.sort())

      return {
        ...state,
        filterdata: action.payload,
        isloading: false,
        allproduct: action.payload


      }


    },


    gridFalse(state, action) {

      return {

        ...state,
        gridview: false

      }

    },


    gridTrue(state, action) {

      return {

        ...state,
        gridview: true

      }

    },



    SortingOrder(state, action) {


      // {{{{{{{{{{{{{{{{{{A to Z}}}}}}}}}}}}}}}}}}
      if (action.payload === "Ascending-order") {





        const con = [...state.filterdata]

        const newData = con.sort((a, b) => {
          return a.name.localeCompare(b.name)
        });

        return {

          ...state,
          filterdata: newData


        }


      }








      // {{{{{{{{{{{{{{{Z to A}}}}}}}}}}}}}}}
      if (action.payload === "Descending-order") {


        const con = [...state.filterdata]

        const newData = con.sort((a, b) => {
          return b.name.localeCompare(a.name)
        });

        return {

          ...state,
          filterdata: newData


        }


      }





      // {{{{{{{{{{{{{{{{{{{{{{{PRICE HIGH TO LOW}}}}}}}}}}}}}}}}}}}}}}}
      if (action.payload === "Price-high") {


        const con = [...state.filterdata]

        const newData = con.sort((a, b) => {
          return b.price - a.price
        });

        return {

          ...state,
          filterdata: newData


        }


      }







      // {{{{{{{{{{{{{{{{{{{{{{{PRICE LOW TO HIGH}}}}}}}}}}}}}}}}}}}}}}}
      if (action.payload === "Price-low") {


        const con = [...state.filterdata]

        const newData = con.sort((a, b) => {
          return a.price - b.price
        });

        return {

          ...state,
          filterdata: newData


        }


      }

    }


    ,

    changeSearch(state, action) {







      if (action.payload === "") {

        return {

          ...state,
          filterdata: state.allproduct


        }

      }

      const data = [...state.allproduct]


      const newData = data.filter((e) => {

        return e.name.toLowerCase().includes(action.payload)

      })



      return {

        ...state,
        filterdata: newData


      }


    },




    categoryFilter(state, action) {




      if (action.payload === "All") {


        return {

          ...state,
          filterdata: state.allproduct

        }

      }

      const newData = [...state.allproduct]

      const filterdata = newData.filter((e) => e.category === action.payload)


      return {

        ...state,
        filterdata: filterdata


      }



    },



    companyFilter(state, action) {




      if (action.payload === "All") {


        return {

          ...state,
          filterdata: state.allproduct


        }

      }

      const newData = [...state.allproduct]

      const filterdata = newData.filter((e) => e.company === action.payload)


      return {

        ...state,
        filterdata: filterdata


      }



    }

















  }
})


export const { add, gridFalse, gridTrue, SortingOrder, changeSearch, categoryFilter , companyFilter } = filterstore.actions

export default filterstore.reducer





