import React, { useEffect, useState } from "react";

const Contact = () => {
  // useState for setcount in our tab Feilds
  const [count, setCount] = useState(0);
  const [width, setWidth]=useState(window.screen.width)
  useEffect(() => {
    // condition for when we have zero click
    if (count >= 1) {
      document.title = `chats (${count})`;
    } else {
      document.title = `chats`;
    }
    // window.title={count}
    // console.log("hello use Effect");
  },[count]);
  const actualWidth=()=>{
    setWidth(window.innerWidth)
  }
  useEffect(()=>{
    window.addEventListener('resize',actualWidth)
    return ()=>{
      window.removeEventListener('resize',actualWidth)

    }
  })
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>{count}</h1>
      <button className="btn btn-primary" onClick={handleClick}>
        increment count
      </button>
      <h5>Actual Screen Width </h5>
      <h1>{width}</h1>
    </>
  );
};

export default Contact;
