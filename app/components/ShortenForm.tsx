"use client"

import styled from "styled-components";
import {useEffect, useState} from "react";
import FinishedUrl from "@/app/components/FinishedUrl";
import createNewAlias from "@/lib/createNewAlias";
import aliasAvailable from "@/lib/aliasAvailable";

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
    const [baseUrl, setBaseUrl] = useState<string>("");
    const [errorUrl, setErrorUrl] = useState<string>("");
    const [errorAlias, setErrorAlias] = useState<string>("");
    const [shortenedUrl, setShortenedUrl] = useState<string | null>(null);
    const [urlInput, setUrlInput] = useState<string>("");
    const [aliasInput, setAliasInput] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setBaseUrl(window.location.origin);
    }, []);

    function checkURL(url: string){
        if(URL.canParse(url) || url === ""){
            setErrorUrl("");
        }else{
            setErrorUrl("This is an invalid URL");
        }
    }

    async function checkAlias(alias: string): Promise<boolean> {
        if(await aliasAvailable(alias)){
            setErrorAlias("");
            return true;
        }else{
            setErrorAlias("This alias is not available");
            return false;
        }
    }

    async function handleSubmit(){
        setLoading(true);

        try {
            if(!await checkAlias(aliasInput)) return;

            const result = await createNewAlias(aliasInput, urlInput);

            if(result == null) {
                console.error("Failed to shorten URL");
            }
            const fullShortUrl = `${baseUrl}/${aliasInput}`;
            setShortenedUrl(fullShortUrl);
        } catch (error) {
            console.error("Error creating short Url:", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <StyledForm
                action={handleSubmit}
            >
                <UrlDiv>
                    <label htmlFor="url">URL</label>
                    <div>
                        <UrlInput
                            type="text"
                            placeholder="https://example.com/very/long/url"
                            value={urlInput}
                            onChange={(e) => {
                                setUrlInput(e.target.value);
                                checkURL(e.target.value);
                            }}
                            required
                            name="url"/>
                    </div>
                </UrlDiv>
                <AliasDiv>
                    <label htmlFor="alias">Custom Alias</label>
                    <CustomAlias>
                        <p>{baseUrl}/</p>
                        <AliasInput
                            placeholder="your-custom-alias"
                            value={aliasInput}
                            onChange={(e) => {
                                setAliasInput(e.target.value)
                                if(errorAlias) setErrorAlias("");
                            }}
                            required
                            name="alias"/>
                    </CustomAlias>
                </AliasDiv>
                <ShortenButton type="submit" disabled={errorUrl.length > 0 || errorAlias.length > 0}>{loading ? `Shortening...` : `Shorten`}</ShortenButton>
                {errorUrl && <p>{errorUrl}</p>}
                {errorAlias && <p>{errorAlias}</p>}
            </StyledForm>
            {shortenedUrl && <FinishedUrl shortenedUrl={shortenedUrl}/>}
        </>
    );
}