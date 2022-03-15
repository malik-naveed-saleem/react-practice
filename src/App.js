import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Navbar
        title="Learnign App"
        aboutText="About"
        homeText="Home"
        contactText="Contact Us"
      />
      {/* <Navbar/> */}
      <TextForm heading="enter the text to Analyz"/>

      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About/>}></Route>

        <Route path="/formcom" element={<TextForm/>}></Route>

        </Routes>
      </Router>
    </>
  );
};

export default App;
