import styled from "styled-components";
import ShortenForm from "@/app/components/ShortenForm";

const CardBox = styled.div`
    width: 80%;
    margin: 2vw;
    background-color: white;
    padding: 1vw;
    border-radius: 1vw;
    box-shadow: 0 10px 15px -3px rgb(0 0 0/0.1),0 4px 6px -4px rgb(0 0 0/0.1);
`;

const CardHeader = styled.header`
     margin-bottom: 1vw;
`;

const CardTitle = styled.h2`
    font-weight: bold;
`;

const CardInfo = styled.p`
    
`;

export default function ShortenCard() {
    return (
        <CardBox>
            <CardHeader>
                <CardTitle>Shorten a URL</CardTitle>
                <CardInfo>Enter a long URL to create a shorter, sharable link</CardInfo>
            </CardHeader>
            <ShortenForm/>
        </CardBox>
    );
}