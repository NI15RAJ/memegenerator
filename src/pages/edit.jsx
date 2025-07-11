import React, { useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Text from "../componenets/text";
import { toJpeg } from "html-to-image";
import download from "downloadjs";
import "../App.css"; // 👈 Import the styles

const EditPage = () => {
  const [params] = useSearchParams();
  const [count, setCount] = useState(0);
  const memeRef = useRef();

  const addText = () => setCount(count + 1);

  const handleSave = () => {
    if (memeRef.current) {
      toJpeg(memeRef.current, { quality: 0.95 })
        .then((dataUrl) => {
          download(dataUrl, "meme.jpeg");
        })
        .catch((err) => {
          console.error("Export failed", err);
        });
    }
  };

  return (
    <div className="container">
      <h2>Meme Editor</h2>

      <div ref={memeRef} className="meme">
        <img src={params.get("img")} alt="meme" />
        {Array(count)
          .fill(0)
          .map((_, i) => (
            <Text key={i} />
          ))}
      </div>

      <div>
        <Button variant="primary" onClick={addText}>
          Add Text
        </Button>
        <Button variant="success" onClick={handleSave}>
          Save as JPEG
        </Button>
      </div>
    </div>
  );
};

export default EditPage;
