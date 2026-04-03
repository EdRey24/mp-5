import {useState} from "react";

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
        <div>
            <p>Your shortened URL:</p>
            <a href={shortenedUrl} target="_blank">{shortenedUrl}</a>
            <button onClick={() => handleCopy(shortenedUrl)}>
                {copied ? "Copied!" : "Copy"}
            </button>
        </div>
    );
}