"use client";

import styled, {createGlobalStyle} from "styled-components";
import ShortenCard from "@/app/components/ShortenCard";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        box-sizing: border-box;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }
    
    body{
        background-color: #f3e9fd;
    }
`;

const Title = styled.h1`
    margin-bottom: 0.5vw;
    font-weight: 400;
    font-size: calc(2px + 3vw);
    background-color: #ffffff;
`;

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4vw;
`;

const StyledHeading = styled.h1`
    font-size: calc(2px + 3vw);
`;

const StyledP = styled.p`
    color: #737373;
    font-size: calc(2px + 1vw);
`;



export default function Home() {

  return (
      <>
          <GlobalStyle/>
          <Title>CS391 URL Shortener</Title>
          <StyledDiv>
              <StyledHeading>URL Shortener</StyledHeading>
              <StyledP>Shorten your long URLs into compact, shareable links</StyledP>
              <ShortenCard/>
          </StyledDiv>
      </>

  );
}
