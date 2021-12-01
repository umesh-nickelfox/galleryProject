import React, { useState } from "react";
import { Form, FormGroup, FormLabel, Button } from "react-bootstrap";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validation() {
    return email.length > 0 && password.length > 0;
  }
  function handelSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <Form onSubmit={handelSubmit}>
        <FormGroup size="lg" controlId="password">
          <FormLabel>Password</FormLabel>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <Button block size="lg" type="submit" disabled={!validation()}>Login</Button>
      </Form>
    </div>);
};

export default Login;
