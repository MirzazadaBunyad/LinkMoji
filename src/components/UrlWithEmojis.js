import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const UrlWithEmojis = ({ url, emojiUrl, onCopy, }) => {
    const handleClick = () => {
        window.location.href = url;
    };
    return (_jsxs("div", { className: "url-with-emojis", children: [_jsx("p", { children: _jsx("a", { href: url, target: "_blank", rel: "noopener noreferrer", onClick: handleClick, style: { textDecoration: "none", color: "blue" }, children: emojiUrl }) }), _jsx("button", { onClick: onCopy, children: "Copy" })] }));
};
export default UrlWithEmojis;
