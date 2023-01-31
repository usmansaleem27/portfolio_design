import React, { useState } from "react";

const Submit = () => {
  const [user, setUser] = useState([
    { name: "", email: "", password:"" },
  ]);

  const [data, setData] = useState({ name: "", email: "", password:"" });

  const submitHandler = (e) => {
    e.preventDefault();
    setUser([...user, data]);
    console.log(data.name, data.email, data.password);
    localStorage.setItem('Name' , data.name )
    localStorage.setItem('Email' , data.email )
    localStorage.setItem('Password' , data.password )
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="m-5">
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={data.name}
          onChange={(e) => {
            setData({ ...data, name: e.target.value });
          }}
        />
        </div>
        <div className="m-5">
        <input
        type='email'
          name="email"
          placeholder="Enter Your Email"
          value={data.email}
          onChange={(e) => {
            setData({ ...data, email: e.target.value });
          }}
        /></div>
        <div className="m-5">
        <input
        type='password'
          name="password"
          placeholder="Enter Your Password"
          value={data.password}
          onChange={(e) => {
            setData({ ...data, password: e.target.value });
          }}
        /></div>
        <div className="m-5">
        <button type="submit" className="btn btn-primary">Submit</button>
        </div>
        
      </form>
      {user.map((e, index) => {
        return (
          <div key={index}>
            <p>{e.name}</p>

            <p>{e.email}</p>

            <p>{e.password}</p>
          </div>
        );
      })}
    </>
  );
};

export default Submit;