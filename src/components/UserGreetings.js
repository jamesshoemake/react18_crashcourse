export default function UserGreetings() {
  const isLoggedIn = false;
  // turnary
  // return <div>{isLoggedIn ? "Logged In" : "Logged Out"}</div>;

  // short circuit
  return <>Welcome {isLoggedIn && "Logged In"}</>;
}
