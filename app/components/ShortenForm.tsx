import styled from "styled-components";

const StyledForm = styled.form`
    margin-bottom: 1vw;
`;

const UrlDiv = styled.div`
    margin-bottom: 1vw;
`;

const UrlInput = styled.input`
    width: 100%;
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
                        <p>vercel url/</p>
                        <AliasInput placeholder="your-custom-alias" required name="alias"/>
                    </CustomAlias>
                </AliasDiv>
                <ShortenButton type="submit">Shorten</ShortenButton>
            </StyledForm>
        </>
    );
}