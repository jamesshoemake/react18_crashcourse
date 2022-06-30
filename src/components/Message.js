import { useState } from "react";
export default function Message() {
  const [message, setMessage] = useState("Welcome"); // array destructuring

  return (
    <>
      <h1>{message}</h1>
      <button onClick={() => setMessage("Thanks your subscribed!")}>
        Subscribe
      </button>
    </>
  );
}
