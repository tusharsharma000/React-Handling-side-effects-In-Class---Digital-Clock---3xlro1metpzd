import React, { useEffect, useState } from "react";
import "../styles/App.css";
const App = () => {
  const [dat, setDat] = useState("");
  const updateTime = () => {
    let tempTime = new Date().toLocaleString();
    setDat(tempTime);
  };

  useEffect(() => {
    let tempTime = new Date().toLocaleString();
    setDat(tempTime);
    let ret = setInterval(updateTime, 1000);
    return () => {
      clearInterval(ret);
    };
  }, []);

  return (
    <div id="main">
      <div className="date-time">{dat}</div>
    </div>
  );
};

export default App;
