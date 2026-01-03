import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState<string>("Loading...");

  useEffect(() => {
    fetch("http://localhost:7777/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Error contacting API"));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Frontend</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;

