import React, { useEffect, useState } from "react";
import "./style.css";

const UseEffectApi = ({ mode }) => {
  const [user, setUser] = useState([]);
  const getUser = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUser(data);
    // console.log(data);
  };

  useEffect(() => {
    getUser();
  },[]);
  const deleteUser=(id)=>{
    const list = user.filter((curVal, index) => {
      return index !== id;
    });
    setUser(list);
    console.log(list);

  }
  return (
    <>
      <h1
        style={{ color: mode === "light" ? "black" : "white" }}
        className="user_div"
      >
        list of fetching Api user
      </h1>

      <table
        class="table"
        style={{ color: mode === "light" ? "black" : "white" }}
      >
        <thead>
          {/* {user.map((curVal) => {
        return (<div className="user_div container" key={curVal.id}> */}
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Company Name</th>
            <th scope="col">zipcode</th>
            <th scope="col">Action</th>


          </tr>
        </thead>
        <tbody>
          {user.map((val,index) => {
            return (
              <tr key={index}>
                <th scope="row">{val.id}</th>

                <td>{val.name}</td>
                <td>{val.email}</td>
                <td>{val.address.city}</td>
                <td>{val.company.name}</td>
                <td>{val.address.zipcode}</td>
                <td><button  className="btn btn-danger" onClick={()=>{deleteUser(index)}}>delete</button></td>


              </tr>
            );
          })}

          {/* </div>)
})} */}
        </tbody>
      </table>
      {/* <strong>{`user Id  ${curVal.id}`}</strong>
            <p>{curVal.name}</p>
            <p>{curVal.username}</p>
            <p>{curVal.address.city}</p>
            <p>{curVal.address.zipcode}</p>
            <p>{curVal.phone}</p>
            <p>{curVal.company.name}</p> */}
    </>
  );
};

export default UseEffectApi;
