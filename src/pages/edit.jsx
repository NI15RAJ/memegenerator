import React, { useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Button from "react-bootstrap/Button"; 
import Text from "../componenets/text";
import { exportComponentAsJPEG } from "react-component-export-image";

const EditPage = () => {
  const [params] = useSearchParams();
  const [count, setCount] = useState(0);
  const memeRef = useRef(); 

  const addText = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div
        style={{ width: "700px", border: "1px solid" }}
        ref={memeRef}
        className="meme mt-5 mb-5"
      >
        
        <img src={params.get("img")} width="250px" alt="meme" />
        {Array(count)
          .fill(0)
          .map((_, i) => (
            <Text key={i} />
          ))}
      </div>
      <Button onClick={addText}>Add Text</Button>
      <Button
        variant="success"
        onClick={() => exportComponentAsJPEG(memeRef)}
      >
        Save
      </Button>
    </div>
  );
};

export default EditPage;
