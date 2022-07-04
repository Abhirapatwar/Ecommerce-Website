import React from "react";
import { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [vpassword, setVpassword] = useState("");

  async function formfilled() {
    if (password == vpassword) {
      let value = { "username": name, "email": email, "password": password };
      await fetch("http://127.0.0.1:8000/signup/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(value),
      })
        .then((response) => response.json())
        .then((data) => {
          // console.log(data['formdata']['msg']);
          console.log(data);
        })
        .catch((error) => console.error(error));
    } else {
      console.log("password did not match");
    }
  }

  function formsub(event) {
    event.preventDefault();
  }

  return (
    <>
      <h1 style={{ color: "white" }}>Registration page</h1>
      <div className="container registercontainer">
        <form method="POST" onSubmit={formsub}>
          <div className="mb-3 text-start">
            <label
              HTMLfor="exampleInputEmail1"
              className="form-label text-start"
            >
              Name
            </label>
            <input
              type="text"
              className="form-control "
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="mb-3 text-start">
            <label
              HTMLfor="exampleInputEmail1"
              className="form-label text-start"
            >
              Email address
            </label>
            <input
              type="email"
              className="form-control "
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(t) => {
                setEmail(t.target.value);
              }}
            />
          </div>
          <div className="mb-3 text-start">
            <label HTMLfor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <div className="mb-3 text-start">
            <label HTMLfor="exampleInputPassword1" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => {
                setVpassword(e.target.value);
              }}
            />
          </div>
          <div className="text-start">
            <div className=" d-inline">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={formfilled}
              >
                Submit
              </button>
            </div>
            <div className=" d-inline mx-3">
                <a className="btn btn-primary"href="/">Login</a> 
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default Register;
