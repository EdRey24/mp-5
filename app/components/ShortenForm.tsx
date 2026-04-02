"use client"

import styled from "styled-components";
import {useEffect, useState} from "react";

const StyledForm = styled.form`
    margin-bottom: 1vw;
`;

const UrlDiv = styled.div`
    margin-bottom: 1vw;
`;

const UrlInput = styled.input`
    width: 100%;
    border-radius: 0.2vw;
    border: 1px solid #e5e7eb;
`;

const AliasDiv = styled.div`
    margin-bottom: 1vw;
`;

const CustomAlias = styled.div`
    display: flex;
    align-items: center;
`;

const AliasInput = styled.input`
    margin-left: 0.5vw;
    text-align: center;
    border-radius: 0.2vw;
    border: 1px solid #e5e7eb;
`;

const ShortenButton = styled.button`
    width: 100%;
    background-color: #10b981;
    color: white;
    border-radius: 0.3vw;
    border: none;
    padding: 0.5vw;
`;


export default function ShortenForm(){
    const [baseUrl, setBaseUrl] = useState<string>('');

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setBaseUrl(window.location.origin);
    }, []);

    return (
        <>
            <StyledForm>
                <UrlDiv>
                    <label htmlFor="url">URL</label>
                    <div>
                        <UrlInput placeholder="https://example.com/very/long/url" required name="url"/>
                    </div>
                </UrlDiv>
                <AliasDiv>
                    <label htmlFor="alias">Custom Alias</label>
                    <CustomAlias>
                        <p>{baseUrl}/</p>
                        <AliasInput placeholder="your-custom-alias" required name="alias"/>
                    </CustomAlias>
                </AliasDiv>
                <ShortenButton type="submit">Shorten</ShortenButton>
            </StyledForm>
        </>
    );
}