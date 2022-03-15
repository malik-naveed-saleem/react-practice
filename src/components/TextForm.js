import React, { useState } from "react";
import propTypes from "prop-types";

const TextForm = (props) => {
  const [text, setText] = useState("");
  const handleUpperCase = () => {
    console.log("upper case Was Clicked");
    const newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowerCase = () => {
    setText(text.toLowerCase());
  };
  const handleOnChange = (e) => {
    console.log("handle On Change");
    setText(e.target.value);
  };
  const handleClearCase = () => {
    const newText = "";
    setText(newText);
  };
  return (
    <>
      <div className="container">
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Enter text here to Convert To Upper Case
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            value={text}
            rows="8"
            onChange={handleOnChange}
          ></textarea>
          <button
            className="btn btn-primary mt-2 mx-2"
            onClick={handleUpperCase}
          >
            Upper Case
          </button>
          <button
            className="btn btn-success mt-2 mx-2"
            onClick={handleLowerCase}
          >
            Lower Case
          </button>
          <button
            className="btn btn-success mt-2 mx-2"
            onClick={handleClearCase}
          >
            Clear Text
          </button>
        </div>
      </div>
      <div className="container my-2">
        <h2> your text summary</h2>
        <p>
          {" "}
          {text.split(" ").length} words and {text.length} character{" "}
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read this paragraph</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
};

export default TextForm;
TextForm.protoType = {
  heading: propTypes.string,
};
