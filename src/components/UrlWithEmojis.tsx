import React from "react";

interface UrlWithEmojisProps {
  url: string;
  emojiUrl: string;
  onCopy: () => void;
}

const UrlWithEmojis: React.FC<UrlWithEmojisProps> = ({
  url,
  emojiUrl,
  onCopy,
}) => {
  const handleClick = () => {
    window.location.href = url;
  };

  return (
    <div className="url-with-emojis">
      <p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          style={{ textDecoration: "none", color: "blue" }}
        >
          {emojiUrl}
        </a>
      </p>
      <button onClick={onCopy}>Copy</button>
    </div>
  );
};

export default UrlWithEmojis;
