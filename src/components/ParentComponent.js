import { ChildComponent } from "./ChildComponent";

export const ParentComponent = () => {
  const GreetParent = (childName) => {
    alert(`Hello Parent, ${childName}`);
  };
  return <ChildComponent GreetParent={GreetParent} />;
};
