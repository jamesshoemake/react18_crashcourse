import React from "react";
import "./App.css";
import "./appStyles.css"; // global
import styles from "./appStyles.module.css"; // local scoped

import { Greet } from "./components/Greet"; // named export
// import Greet from "./components/Greet"; // default export
import Message from "./components/Message"; // useState
import ClickHandler from "./components/ClickHandler"; // event handling
import { ParentComponent } from "./components/ParentComponent"; // parent child communcation
import UserGreetings from "./components/UserGreetings"; // conditional
import { NameList } from "./components/NameList"; // array map example
import { StyleSheet } from "./components/StyleSheet"; // style sheet exmaple
import { Inline } from "./components/Inline"; // inline style example
import { Form } from "./components/Form"; // basic form
import { PostList } from "./components/PostList"; // useEffect and useState fetching data
import { PostForm } from "./components/PostForm"; // submit post request within react
import { Transition } from "./components/Transition"; // React 18 useTransition

function App() {
  // console.log("data", NAMES);

  return (
    <div className="App">
      <Greet name={"John"} heroName={"Batman"} />
      <Greet name={"Clark"} heroName="Superman">
        <button>Action</button>
      </Greet>
      <Greet name={"Diana"} heroName="Wonderwoman">
        <p>This is children props</p>
      </Greet>
      <Message />
      <ClickHandler />
      <ParentComponent />
      <UserGreetings />
      <NameList />
      <StyleSheet />
      <Inline />
      <h1 className="error">Error from CSS StyleSheet</h1>
      <h1 className={styles.success}>Success from CSS module</h1>
      <Form />
      <PostList />
      <PostForm />
      <Transition />
    </div>
  );
}

export default App;
