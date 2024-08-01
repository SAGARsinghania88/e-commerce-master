import GlobalStyle from "./Globlestyle"
import styled, { ThemeProvider } from "styled-components"
import Home from "./Pages/Home";
import Mainheader from './Component/Mainheader'
import Offerhead from './Component/Offerhead'
// import { Router, Routes, Route } from "react-router";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Singleproductpage from "./Pages/Singleproductpage";
import Cart from "./Pages/Cart";
import Filterpage from "./Pages/Filterpage";
import { ToastContainer } from 'react-toastify';


function App() {


  const theme = {
    backgroundColor: "WHITE",

    Headertitlefont: "'Raleway', sans-serif",

    secondarybackgroundcolor: '#000000',

    borderRadius: "10px"

  };











  return (
    <>

      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <Router>

          <Offerhead />
          <Mainheader />
          <Wrapper>

            <Routes>

              <Route path="/" element={<Home />} />

              <Route path="/singleproduct/:id" element={<Singleproductpage />} />

              <Route path="/cart" element={<Cart />} />

              <Route path="/filter" element={<Filterpage />} />



            </Routes>


          </Wrapper>

        </Router>




      </ThemeProvider>


      <ToastContainer
        style={{ fontSize: "14px" }}
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="light"
      />


    </>
  )
}

export default App


const Wrapper = styled.div`
  

max-width: 1440px;
margin: auto;



`