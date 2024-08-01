import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchProduct } from '../redux/productstore';
import styled from 'styled-components';
import Linearfilter from '../Component/Linearfilter';
import Gridfilter from '../Component/Gridfilter';
import { gridTrue, gridFalse } from '../redux/filterstore';
import GridViewIcon from '@mui/icons-material/GridView';
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';
import Sort from '../Component/Sort';
import Search from '../Component/Search';
import { categoryFilter } from '../redux/filterstore';
import { companyFilter } from '../redux/filterstore';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';


const Filterpage = () => {

  const [check, ccheck] = useState("grid")
  const [categorycheck, ccategorycheck] = useState("")
  const [companycheck, ccompanycheck] = useState("")
  const [filterCheck, ffilterCheck] = useState(false)





  const { filterdata, gridview, isloading, allproduct } = useSelector(state => state.filter)




  const dispatch = useDispatch()






  useEffect(() => {

    dispatch(fetchProduct())

    dispatch(gridTrue())

  }, [])



  // {{{{{{{{{{{{{{{{{{{{ CATEGORY UNIQUEE VALUE  }}}}}}}}}}}}}}}}}}}}



  const categoryAarry = allproduct.map((e) => {
    return (


      e.category

    )


  })


  const UniqueCategoryAarr = new Set([...categoryAarry])

  const NewCategoryAarr = [...UniqueCategoryAarr]

  // {{{{{{{{{{{{{{{{{{{{ COMPANY UNIQUEE VALUE  }}}}}}}}}}}}}}}}}}}}



  const companyAarry = allproduct.map((e) => {
    return (


      e.company

    )


  })


  const UniqueCompanyAarr = new Set([...companyAarry])

  const NewCompanyAarr = [...UniqueCompanyAarr]






  // {{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}}

  if (isloading) {

    return <Loadingspinner>  <img src="/images/loading.svg" alt="" />  </Loadingspinner>

  }









  return (

    <Container>

      <FilterCon className={filterCheck === true ? 'filterColumn active' : "filterColumn"}            >


        <div className='closeFilter'>

          <CloseRoundedIcon onClick={() => ffilterCheck(false)} />
        </div>

        <Search />

        {/* {{{{{{{{{{{{{}}}}}}}}}}}}} */}
        <div className='categoryCon'>

          <div >Category</div>
          <div className='categoryCon-colone'>
            {
              NewCategoryAarr.map((e) => {

                return (

                  <div className={categorycheck === e ? 'category active' : 'category'} onClick={() => { dispatch(categoryFilter(e)), ccategorycheck(e) , ccompanycheck("")  }} >{e}</div>
                )

              })

            }

          </div>

        </div>
        {/* {{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}} */}





        <div className='categoryCon'>

          <div>Company</div>

          <div className='categoryCon-colone'>
            {
              NewCompanyAarr.map((e) => {

                return (

                  <div className={companycheck === e ? 'category active' : 'category'} onClick={() => { dispatch(companyFilter(e)), ccompanycheck(e) , ccategorycheck("")  }} >{e}</div>
                )

              })

            }

          </div>

        </div>




        {/* {{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}} */}

        <div className='clear' onClick={() => {


          dispatch(categoryFilter("All"))

          ccategorycheck("")
          ccompanycheck("")


        }} > Clear filter </div>

      </FilterCon >







      {/* {{{{{{{{{{{{{{{}}}}}}}}}}}}}}} */}









      <div className='productColumn'>

        <div className='sorting'>

          <div className='grid-col'>

            <GridViewIcon className={check === "grid" ? 'icon active' : 'icon '} onClick={() => { dispatch(gridTrue()), ccheck("grid") }} />

            <ViewAgendaOutlinedIcon className={check === "linear" ? 'icon active' : 'icon '} onClick={() => { dispatch(gridFalse()), ccheck("linear") }} />

            <div className='filter-btn'>
              <FilterAltIcon className={filterCheck === true ? 'icon active' : 'icon'} onClick={() => ffilterCheck(!filterCheck)} />
            </div>

          </div>




          <div className='sort-col'>

            <Sort />

          </div>




        </div>







        <div className='products'>


          {gridview ? <Gridfilter product={filterdata} /> : <Linearfilter product={filterdata} />}



        </div>





      </div>

    </Container>


  )


}

export default Filterpage


const Loadingspinner = styled.div`


width: 100%;
height: 80vh;
display: flex;
align-items: center;
justify-content: center;
text-decoration: underline;

img{

  width: 150px;
}


`















const Container = styled.div`
width: 90%;
margin: auto;
display: grid;
grid-template-columns: 20%  80%;
grid-gap: 40px;
justify-content: space-between;
/* border: 1px solid red; */
position: relative;

@media(max-width:1200px){

  grid-template-columns:   100%;
  width: 95%;

}



.filterColumn{
  margin-top: 30px;
position: sticky;
top:30px;
height: 700px;
/* display: none; */

@media(max-width:1200px){


display: none;
position: fixed;
width: 230px;
background-color: #c4c1c1;
padding: 10px;
z-index: 999;
height: 100vh;
left: 0px;
top: -30px;
}


}


.filterColumn.active{
/* border: 1px solid black; */
display: block;


}






.productColumn{





.sorting{
  /* border: 1px solid red; */
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
padding: 0px 20px 0px 20px;


@media(max-width:500px){

/* border: 1px solid red; */
padding: 0px;


}


.filter-btn{


  cursor: pointer;
  display: flex;
  align-items: center;
  display: none;
  margin-top: 5px;


  @media(max-width:1200px){

display: block;

}



}





.grid-col{

/* border: 1px solid red; */
width: 80px;
display: flex;
align-items: center;
justify-content:space-between;


@media(max-width:500px){
  width: 90px;
}




}



.sort-col{

/* border: 1px solid red; */
width: 220px;
display: flex;
justify-content: space-between;

@media(max-width:500px){
  width: 160px;
/* font-size: 11px; */
/* border: 1px solid red; */
font-size: 14px;
}





select{
  background:none;
  border: none;
  cursor: pointer;
}
}


.icon.active{

border: 1px solid black;
border-radius: 5px;
box-sizing: content-box;
background-color: black;
color: white;
  }





.icon{
font-size:24px;
border: 1px solid transparent;
cursor: pointer;


@media(max-width:400px){


font-size: 22px;
}


}


}


}


`

// {{{{{{{{{{{{{{{Filter css}}}}}}}}}}}}}}}




const FilterCon = styled.div`

.closeFilter{
cursor: pointer;
display: none;
position:relative ;

width: 30px;
left: 180px;

  @media(max-width:1200px){


display: block;
}


}




.categoryCon{
  margin-top: 50px;




.category{



border-radius: 60px;
padding:5px 10px 5px 10px;
border: 1px solid #e0e0e0;
background: #e0e0e0;
color: black;
font-size: 15px;
cursor: pointer;
}


.category.active{
  border-radius:60px;
  padding:5px 10px 5px 10px;
  border: 1px solid black;
background-color: black;
color: white;
  /* height: 40px; */
font-size: 15px;
min-width: 50px;
display: flex;
justify-content: center;

}



.categoryCon-colone{
  margin-top: 20px;
display: flex;
flex-wrap: wrap;
min-height:120px;
align-items: center;
grid-gap: 10px;


}




}




.clear{

border-radius:60px;
padding:5px 10px 5px 10px;
border: 1px solid black;
background-color: black;
color: white;
/* height: 40px; */
font-size: 15px;
cursor: pointer;
min-width: 50px;
display: flex;
justify-content: center;
margin-top: 100px;


}




`


