import styled, { createGlobalStyle } from "styled-components";

import BGImage from "./Images/image.jpg";
export const GlobalStyle = createGlobalStyle`
html {
    height: 100%
}
body{
    background-image: url(${BGImage});
    background-size:cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
}
*{
    box-sizing:border-box;
    font-family:'Catamaran', sans-serif;
}`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  algin-items: center;
  > p {
    color: #fff;
  }
  .scope {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    font-family: Fascinate Inline;
    font-weight: 400;
    font-size: 70px;
    text-align: center;
    margin: 20px;
    color:#5b4db0;
  }
  .start, .next {
    cursor: pointer;
    background: linear-gradient(180deg, #ffffff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }
  .start {
    max-width: 200px;
  }
`;
