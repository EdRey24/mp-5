import {useState} from "react";
import styled from "styled-components";

const StyledOutput = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px solid #e5e7eb;
    border-radius: 1vw;
    padding: 1vw;
`;

const StyledText = styled.p`
    color: gray;
    margin-bottom: 1vw;
    font-size: calc(2px + 2vw);
`;

const CopyLinkDiv = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1vw;
`;

const StyledLink = styled.a`
    text-decoration: none;
    color: #171717;
    font-weight: bold;
    font-size: calc(2px + 2vw);
`;

const CopyButton = styled.button`
    background: none;
    border: none;
    margin-left: auto;
    font-size: calc(2px + 2vw);
    cursor: pointer;
`;

export default function FinishedUrl({shortenedUrl}: {shortenedUrl: string}){
    const [copied, setCopied] = useState<boolean>(false);

    const handleCopy = async (urlToCopy: string) => {
        try {
            await navigator.clipboard.writeText(urlToCopy);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy!", err);
        }
    };

    return (
        <StyledOutput>
            <StyledText>Your shortened URL:</StyledText>
            <CopyLinkDiv>
                <StyledLink href={shortenedUrl} target="_blank">{shortenedUrl}</StyledLink>
                <CopyButton onClick={() => handleCopy(shortenedUrl)}>
                    {copied ? "Copied!" : "Copy"}
                </CopyButton>
            </CopyLinkDiv>

        </StyledOutput>
    );
}