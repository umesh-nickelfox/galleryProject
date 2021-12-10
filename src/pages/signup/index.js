import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import usePasswordValidator from "./usePasswordValidator";
//import { Card } from "reactstrap";
import { validateEmail } from "./utils";
//import "./style.css";


const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const history = useHistory();

  const [password, setPassword, passwordError] = usePasswordValidator({
    min: 8,
    max: 15
  });
  useEffect(
    () => {
      if (!email) {
        setEmailError("");
      }
      else {
        if (validateEmail(email)) {
          setEmailError("");
        }
        else {
          setEmailError("Please enter valid email");
        }
      }
    }, [email]
  );
  useEffect(
    () => {
      if (!confirmPassword || !password) {
        setConfirmPasswordError("")
      }
      else {
        if (password !== confirmPassword) {
          setConfirmPasswordError("Password must match");
        }
        else {
          setConfirmPasswordError("");
        }
      }
    }, [password, confirmPassword]
  );

  //var i = 0;






  const handleSubmit = (evt) => {
    evt.preventDefault();


    const authUsers = JSON.parse(localStorage.getItem("galleryUsers")) || [];

    const isExistingUser = authUsers.find(({ email: savedEmail }) => savedEmail === email) ? true : false;

    if (isExistingUser) {
      alert('User already existing');
    } else {
      authUsers.push({ email, password });
      localStorage.setItem('galleryUsers', JSON.stringify(authUsers));
    }

    history.push('/login');
  }

  return (

    <div className="App">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h3>Sign Up</h3>
          <input
            value={username}
            onChange={e => setUsername(e.target.value)}
            typr="text"
            placeholder="Username"
          />
          <div className="error"></div>
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <div className="error">{emailError}</div>
          <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="text"
            placeholder="Password"
          />
          <div className="error">{passwordError}</div>
          <input
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            type="text"
            placeholder="confirm Password"
          />
          <div className="error">{confirmPasswordError}</div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
