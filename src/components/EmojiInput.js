import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
const EmojiInput = ({ onSubmit }) => {
    const [inputUrl, setInputUrl] = useState("");
    const handleChange = (e) => {
        setInputUrl(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputUrl) {
            onSubmit(inputUrl);
        }
    };
    return (_jsxs("form", { onSubmit: handleSubmit, children: [_jsx("input", { type: "text", value: inputUrl, onChange: handleChange, placeholder: "Enter URL...", required: true }), _jsx("button", { type: "submit", children: "Create" })] }));
};
export default EmojiInput;
