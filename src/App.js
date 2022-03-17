import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Contact from "./components/Contact";
import UseEffectApi from "./components/UseEffectApi";
import ToDoList from "./components/ToDoList";
import UseStateArray from "./components/UseStateArray";
// import Home from "./pages/Home";

const App = () => {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
    }
  };
  return (
    <>
      {/* <Navbar/> */}

      <Router>
        <Navbar
          title="Learnign App"
          aboutText="About"
          homeText="Home"
          contactText="UseEffect"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <TextForm heading="enter the text to Analyz" mode={mode} />
            }
          ></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route path="/useeffect" element={<Contact />}></Route>
          <Route path="/fetchingapi" element={<UseEffectApi mode={mode}/>}></Route>
          <Route path="/todolist" element={<ToDoList/>}></Route>
          <Route path="/statearray" element={<UseStateArray/>}></Route>


          {/* <Route path="/formcom" element={<TextForm/>}></Route> */}
        </Routes>
      </Router>
    </>
  );
};

export default App;
