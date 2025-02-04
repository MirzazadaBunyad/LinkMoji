import React, { useState } from "react";
import EmojiInput from "./components/EmojiInput";
import UrlWithEmojis from "./components/UrlWithEmojis";

const App: React.FC = () => {
  const [url, setUrl] = useState<string>("");
  const [emojiUrl, setEmojiUrl] = useState<string>("");
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [copySuccess, setCopySuccess] = useState<boolean>(false);

  const convertToEmojiUrl = (inputUrl: string): string => {
    const emojis = ["😎", "🔥", "😇"];
    const emojiString = emojis.join("");
    return `https://linkmoji.com/${emojiString}`;
  };

  const handleUrlSubmit = (inputUrl: string) => {
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

  return (
    <div className="App">
      <h1>LinkMoji</h1>
      <EmojiInput onSubmit={handleUrlSubmit} />
      {isAnimating ? (
        <div className="emoji-explosion">✨🔥💥</div>
      ) : (
        emojiUrl && (
          <UrlWithEmojis url={url} emojiUrl={emojiUrl} onCopy={handleCopy} />
        )
      )}
      {copySuccess && <div className="copy-message">Copied!</div>}
    </div>
  );
};

export default App;
