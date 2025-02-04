import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import EmojiInput from "./components/EmojiInput";
import UrlWithEmojis from "./components/UrlWithEmojis";
const App = () => {
    const [url, setUrl] = useState("");
    const [emojiUrl, setEmojiUrl] = useState("");
    const [isAnimating, setIsAnimating] = useState(false);
    const [copySuccess, setCopySuccess] = useState(false);
    const convertToEmojiUrl = (inputUrl) => {
        const emojis = ["😀", "😐", "😱"];
        const emojiString = emojis.join("");
        return `https://linkmoji.com/${emojiString}`;
    };
    const handleUrlSubmit = (inputUrl) => {
        setUrl(inputUrl);
        setIsAnimating(true);
        setTimeout(() => {
            const generatedEmojiUrl = convertToEmojiUrl(inputUrl);
            setEmojiUrl(generatedEmojiUrl);
            setIsAnimating(false);
        }, 1000);
    };
    const handleCopy = () => {
        if (emojiUrl) {
            navigator.clipboard
                .writeText(emojiUrl)
                .then(() => {
                setCopySuccess(true);
                setTimeout(() => setCopySuccess(false), 2000);
            })
                .catch(() => {
                setCopySuccess(false);
            });
        }
    };
    return (_jsxs("div", { className: "App", children: [_jsx("h1", { children: "LinkMoji" }), _jsx("p", { children: "URL to Emoji Formatter" }), _jsx(EmojiInput, { onSubmit: handleUrlSubmit }), isAnimating ? (_jsx("div", { className: "emoji-explosion", children: "\u2728\uD83D\uDD25\uD83D\uDCA5" })) : (emojiUrl && (_jsx(UrlWithEmojis, { url: url, emojiUrl: emojiUrl, onCopy: handleCopy }))), copySuccess && _jsx("div", { className: "copy-message", children: "Copied!" })] }));
};
export default App;
