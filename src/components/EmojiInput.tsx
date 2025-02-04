import React, { useState } from "react";

interface EmojiInputProps {
  onSubmit: (url: string) => void;
}

const EmojiInput: React.FC<EmojiInputProps> = ({ onSubmit }) => {
  const [inputUrl, setInputUrl] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputUrl(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputUrl) {
      onSubmit(inputUrl);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputUrl}
        onChange={handleChange}
        placeholder="Paste URL..."
        required
      />
      <button type="submit">Create</button>
    </form>
  );
};

export default EmojiInput;
