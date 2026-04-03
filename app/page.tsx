"use client";

import styled, {createGlobalStyle} from "styled-components";
import ShortenCard from "@/app/components/ShortenCard";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        box-sizing: border-box;
    }
`;

const Title = styled.h1`
    margin-bottom: 0.5vw;
    font-weight: 400;
    font-size: 2vw;
`;

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #e9fdf3;
`;



export default function Home() {

  return (
      <>
          <GlobalStyle/>
          <Title>CS391 URL Shortener</Title>
          <StyledDiv>
              <h1>URL Shortener</h1>
              <p>Shorten your long URLs into compact, shareable links</p>
              <ShortenCard/>
          </StyledDiv>
      </>

  );
}
