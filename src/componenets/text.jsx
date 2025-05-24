import React, { useState, useRef } from "react";
import Draggable from "react-draggable";

const Text = () => {
  const [text, setText] = useState("Double-click to edit");
  const [isEditing, setIsEditing] = useState(false);
  const nodeRef = useRef(null); // required for React 18

  return (
    <Draggable nodeRef={nodeRef}>
      <div ref={nodeRef}>
        {isEditing ? (
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            onDoubleClick={() => setIsEditing(false)}
            autoFocus
          />
        ) : (
          <div onDoubleClick={() => setIsEditing(true)}>{text}</div>
        )}
      </div>
    </Draggable>
  );
};

export default Text;
