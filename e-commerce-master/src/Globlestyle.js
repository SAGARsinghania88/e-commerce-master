import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

body{

  background-color: white;
overflow-x: hidden;


}

  *{
 
    -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    margin: 0;
   
    padding: 0;
   
    font-family: 'Poppins', sans-serif;
  
    /* font-family: 'Raleway', sans-serif; */
    box-sizing: border-box;

    text-decoration: none;
text-transform: none;
    outline: none;
font-weight: 200;
    text-rendering: optimizeLegibility;
    -webkit-tap-highlight-color: transparent;
  
  }


  input,
textarea,
button,
select,
a {
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  color: black;
}
a:focus,a:visited,a:active{
  outline: none;
}




  ::-webkit-scrollbar-thumb{
  
  background-color: rgb(60, 60, 60,0.7);
  


  }

  ::-webkit-scrollbar-track {

background-color: white;

}

::-webkit-scrollbar-thumb {

background-color: rgb(60, 60, 60, 0.7);
border-radius: 12px;


}

::-webkit-scrollbar {

width: 8px;

}



.noSelect {
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.noSelect:focus {
    outline: none !important;
}










`;



export default GlobalStyle;