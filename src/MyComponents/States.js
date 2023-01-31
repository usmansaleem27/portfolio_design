import React, {useState} from "react";

const States = () => {
    const [user, setUser] = useState({
        name:"",
        email:"",
        password: "",
    });

    let name, value;

    const handleInputs=(event)=>{
        console.log(event);
        name = event.target.name;
        value = event.target.value;

        setUser({
            ...user, [name]:value
        })
    }

    const handleSubmit = event => {
        console.log(name)
    }
  return (
    <div>
      <div className="container">
        <div id="my_form" className="mt-5">
          <form id="register-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name"></label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="p-3"
                value={user.name}
                onChange={handleInputs}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email"></label>
              <input
                type="text"
                name="email"
                placeholder="Your Email"
                className="p-3 mt-5"
                value={user.email}
                onChange={handleInputs}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password"></label>
              <input
                type="password"
                name="password"
                placeholder="Your Password"
                className="p-3 mt-5"
                value={user.password}
                onChange={handleInputs}
              />
            </div>
            <button type="submit" className="btn btn-primary p-2 mt-3">Submit Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default States;
