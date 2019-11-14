import React, { useState } from "react";
import "./App.css";
import { Image } from "./components/Image";
import { Button } from "./components/Button";

function App() {
  const [count, setCount] = useState(1);
  const [size, setSize] = useState({ width: 200, height: 400 });
  const [fetchedWidth, setFetchedWidth] = useState(size.width);
  const [fetchedHeight, setFetchedHeight] = useState(size.height);
  function handleChangeWidth(e) {
    setSize({ ...size, width: e.target.value });
    console.log(size.width);
  }
  function handleChangeHeight(e) {
    setSize({ ...size, height: e.target.value });
    console.log(size.height);
  }
  function handleSubmit() {
    setFetchedWidth(size.width);
    setFetchedWidth(size.height);
  }
  function refresh() {
    setCount(count + 1);
  }
  return (
    <div className="App">
      <label>
        width: <input value={size.width} onChange={handleChangeWidth} />
      </label>
      <label>
        height: <input value={size.height} onChange={handleChangeHeight} />
      </label>
      <button onClick={handleSubmit}>Send</button>
      <Image
        title={`Picture n°${count}`}
        src={`https://picsum.photos/${fetchedHeight}/${fetchedWidth}`}
      />
      {fetchedWidth}/{fetchedHeight}
      <Button title="refresh" onClick={refresh} />
    </div>
  );
}

export default App;
