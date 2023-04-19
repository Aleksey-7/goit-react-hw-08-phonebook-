import { css } from '@emotion/react';
import 'modern-normalize';
import backgroundImage from '../images/phonebook-space-2.jpg';

const globalStyles = css`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: linear-gradient(#000000a0, #000000a0), url(${backgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  textarea {
    resize: none;
  }
  a {
    text-decoration: none;
    color: currentColor;
  }
  ul {
    list-style: none;
  }
  button {
    padding: 0;
    margin: 0;
  }
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  ul,
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }
`;

export default globalStyles;
