import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import usePasswordValidator from "./usePasswordValidator";
import { Card } from "reactstrap";
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

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(email, username, password, confirmPassword);
    localStorage.setItem("gallery", JSON.stringify({ email, password }));
    history.replace('/login');
  }

  return (
    <Card style={{ width: '18rem' }}>
      <div className="stylee">
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
    </Card>
  );
};

export default SignUp;
