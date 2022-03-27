import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    color: var(--white);
  }

  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;

    width: 100%;
    height: 100%;
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }

  html {
    background: var(--primary);
  }

  :root {
    --primary: #2D2B4C;
    --secondary: #15181c;
    --search: #202327;
    --white: #d9d9d9;
    --gray: #7a7a7a;
    --outline: #2f3336;
    --retweet: #00c06b;
    --like: #e8265e;
    --twitter: #ffffff;
    --twitter-dark-hover: #24223d;
    --twitter-light-hover: #6c6b82;
  }
`;
