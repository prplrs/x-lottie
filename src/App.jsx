import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import x from "./assets/x-lottie.json";
import Lottie from "lottie-react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Lottie
        className="flex w-screen h-screen justify-center items-center flex-col"
        animationData={x}
      />
    </>
  );
}

export default App;
