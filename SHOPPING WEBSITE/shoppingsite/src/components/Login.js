import { render } from "@testing-library/react";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [lname, setLname] = useState("");
  const [lpassword, setLpassword] = useState("");
  const navigate = useNavigate();

  function formsub(event) {
    event.preventDefault();
  }

  async function loginfilled() {
    let value = { username: lname, password: lpassword };
    await fetch("http://127.0.0.1:8000/signin/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(value),
    })
      .then((response) => response.json())
      .then((data) => {
        let x = data["formdata"]["msg"];
        console.log(x);
        if (x == "True") {
            
            navigate(`/confirmed/${lname}`);
        }
      })
      .catch((error) => console.error(error));
  }

  return (
    <>
      <h1 style={{ color: "white" }}>login page</h1>
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
                setLname(e.target.value);
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
                setLpassword(e.target.value);
              }}
            />
          </div>

          <div className="text-start">
            <div className=" d-inline">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={loginfilled}
              >
                Login
              </button>
              <a href="/register" className="btn btn-primary mx-3 my-3">Register</a>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default Login;
