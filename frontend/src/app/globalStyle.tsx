'use client';
import styled, { createGlobalStyle } from 'styled-components';
const GlobalStyles = createGlobalStyle`
html{
    height: 100%;
    box-sizing: border-box;
    font-size: 16px;
};
*, *:before, *:after {
    box-sizing: inherit;
  };
  body{
    font-family: sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1em;
  };
`;
export default GlobalStyles;
