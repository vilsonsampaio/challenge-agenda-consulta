import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    
    box-sizing: border-box;

    outline: 0;
  }

  html {
    height: 100%;
  }
  
  body {
    background-color: #F2EDF5;
    color: #212529;
    
    font-weight: 500;

    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale;
    
    overflow-x: hidden;
  }

  body, #root {
    position: relative;
  
    min-height: 100vh;
  }

  body, input, button {
    font-family: "Montserrat", sans-serif;
  }

  a {
    display: inline-block;
    background: none;
    
    border: 0;
    
    cursor: pointer;
    
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
  
  ul {
    padding: 0;
    text-align: left;
    
    list-style: none;
  }

  .container {
    width: 100%;
    height: 100%;
    
    max-width: 920px;
    
    margin: 0 auto;

    padding-left: 15px;
    padding-right: 15px;
  }
`;