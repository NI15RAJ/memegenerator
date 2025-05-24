import React, { useState, useEffect } from "react";
import Memecard from "../componenets/card"; // double-check spelling of 'componenets' if it's intentional
import getallmemes  from "../api/memes";

const Homepage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getallmemes().then((memes) => setData(memes.data.memes));
  }, []);
  return (
    <div className="row">
      {data.map((el) => (
        <Memecard key={el.id} img={el.url} title={el.name} />
      ))}
    </div>
  );
};

export default Homepage;
