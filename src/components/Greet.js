// named export
// export const Greet = (props) => {
//   console.log("props", props);
//   // destructoring props
//   const { name, heroName } = props;
//   // props are immutable
//   // props.name = 'Joe' will cause an error

//   return (
//     <>
//       <h1>
//         Greetings {name} - {heroName}
//       </h1>{" "}
//       {props.children}
//     </>
//   );
// };

//alternative is destructoring props in arguments list
export const Greet = ({ name, heroName, children }) => {
  return (
    <>
      <h1>
        Greetings {name} - {heroName}
      </h1>{" "}
      {children}
    </>
  );
};

/* 
default export
const Greet = () => {
  return <h1>Greetings</h1>
}
export default Greet */
