import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body, input, div {
		box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

export default GlobalStyle;
