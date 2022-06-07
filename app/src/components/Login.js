import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles.css";

function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedin, setIsLoggedin] = useState(false);

  const errors = {
    name: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(`https://04cf-2405-201-d006-8087-6406-60-d6cb-c534.in.ngrok.io/customers/login`, {
      username: name,
      password: password,
    });
    const userData = response.data;
    if (userData !== "" && userData !== undefined) {
      if (userData.password !== password) {
        setIsLoggedin(false);
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        console.log(name, password);
        const userData = {
          name,
          password,
        };
        window.localStorage.setItem("token-info", JSON.stringify(userData));
        setIsLoggedin(true);
        setName("");
        setPassword("");
      }
    } else {
      setErrorMessages({ name: "name", message: errors.name });
      setIsLoggedin(false);
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const navigate = useNavigate();
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input
            type="text"
            name="name"
            required
            onChange={(e) => setName(e.target.value)}
          />
          {renderErrorMessage("name")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input
            type="password"
            name="pass"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Key Management System</div>
        {isLoggedin ? navigate("/home") : renderForm}
      </div>
    </div>
  );
}

export default Login;
