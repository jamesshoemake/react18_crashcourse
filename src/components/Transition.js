import { useState, useTransition } from "react";
import NAMES from "./data.json";

export const Transition = () => {
  const [query, setQuery] = useState("");

  const [isPending, startTransition] = useTransition();
  const [inputValue, setInputValue] = useState("");

  const changeHandler = (event) => {
    setInputValue(event.target.value);
    startTransition(() => setQuery(event.target.value));
  };

  const filteredNamed = NAMES.filter((item) => {
    return item.first_name.includes(query) || item.last_name.includes(query);
  });

  return (
    <>
      <input type="text" value={inputValue} onChange={changeHandler} />
      {isPending && <p>Updating List</p>}
      {filteredNamed.map((item) => {
        return (
          <p key={item.id}>
            {item.first_name} {item.last_name}
          </p>
        );
      })}
    </>
  );
};
