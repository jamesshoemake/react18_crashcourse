import { useState } from "react";

export const Form = () => {
  const [userName, setUserName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form Data is ${userName}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>username</label>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        ></input>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
