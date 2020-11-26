import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
  }

  body {
    font-family: "Volkorn", Georgia, serif;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;
