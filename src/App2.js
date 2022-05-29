import { useEffect, useState } from "react";

let n = 0
export default function App() {
  // const count = useRef(0);
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  // console.log(1, count.current++);
console.log(n++);

  useEffect(() => {
    setA(0);

  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox{a}</h1>
      <h1>Helloa CodeSandbox{b}</h1>
    </div>
  );
}
