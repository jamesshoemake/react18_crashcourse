export const ChildComponent = (props) => {
  const { GreetParent } = props; // destructure object, remove need for props.<some props>
  return (
    <div>
      <button onClick={() => GreetParent("Child")}>Greet Parent</button>
    </div>
  );
};
