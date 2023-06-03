import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => {
    alert();
  };

  const contentLadyStyle = {
    color: "pink",
    fontsize: "18px"
  };

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>

      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
