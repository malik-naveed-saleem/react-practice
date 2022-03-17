import React, { useState } from "react";

const ToDoList = () => {
  const [inputData, setInputData] = useState("");
  const [addItem, setAddItem] = useState([]);
  const handleInputData = (e) => {
    setInputData(e.target.value);
  };
  const handleList = () => {
    if (!inputData) {
      alert("empty item can not be set yout item list");
    } else {
      setAddItem([...addItem, inputData]);
      setInputData("");
      // alert("item add successfully")
      console.log(...addItem);
    }
  };
  const handleDelete = (id) => {
    const updatedList = addItem.filter((curVal, ind) => {
      return ind !== id;
    });
    setAddItem(updatedList);
  };
  return (
    <>
      <div className="container">
        <div className=" todo_container">
          <h1>Add your List Here</h1>
        </div>
        <div className="todo_input">
          <input
            type="text"
            name="name"
            onChange={handleInputData}
            value={inputData}
          />
          <button onClick={handleList} className="btn btn-success">
            +
          </button>
        </div>

        {addItem.map((comingItem, index) => {
          return (
            <div key={index} className="dlt_item">
              <p className="comming_item" type="text">
                {comingItem}
              </p>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(index)}
              >
                -
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ToDoList;
