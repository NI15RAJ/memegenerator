import React from "react";

const Text = () => {
  const top = Math.random() * 200 + 50;
  const left = Math.random() * 200 + 50;

  return (
    <div
      className="meme-text"
      contentEditable
      suppressContentEditableWarning={true}
      style={{ top: `${top}px`, left: `${left}px` }}
    >
      Your Text
    </div>
  );
};

export default Text;
