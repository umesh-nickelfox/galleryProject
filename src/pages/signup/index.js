import React, { useState, useEffect } from "react";


const SignUp = () => {
  const [email, setEmail] = useState();
  const [emailError, setEmailError] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [confirmPasswordError, setConfirmPasswordError] = useState();

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
  return (<div>
    <form>
      <h3>Sign Up</h3>
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
    </form>
  </div>);
};

export default SignUp;
