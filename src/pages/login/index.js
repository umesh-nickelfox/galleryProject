

import React, { useReducer, useEffect, useRef } from 'react';
import { useHistory } from "react-router-dom";
import { verifyLogin } from './utils';
import { Card } from "reactstrap";

const userCred = JSON.parse(localStorage.getItem('gallery'));

const initialState = {
  email: '',
  password: '',
  isLoading: false,
  isLoggedIn: userCred?.email && userCred?.password,
  error: ''
};

function loginReducer(state, action) {
  switch (action.type) {
    case 'field': {
      return {
        ...state,
        [action.fieldName]: action.payload
      };
    }
    case 'login': {
      return {
        ...state,
        error: '',
        isLoading: true,
        isFocused: true
      };
    }
    case 'success': {
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false
      };
    }
    case 'error': {
      return {
        ...state,
        error: 'Incorrect email or password entered',
        isLoggedIn: false,
        isLoading: false,
        email: '',
        password: '',
        isFocused: true
      };
    }
    case 'logout': {
      return {
        ...state,
        isLoggedIn: false,
        email: '',
        password: '',
        error: ''
      };
    }
    default:
      return state;
  }
}

export default function LoginWithReducer(props) {
  const [state, dispatch] = useReducer(loginReducer, initialState);
  const { email, password, isLoading, isLoggedIn, error, isFocused } = state;
  const emailRef = useRef(null);

  const history = useHistory();


  const handleSubmit = async e => {
    e.preventDefault();
    dispatch({ type: verifyLogin });
    try {
      await verifyLogin({ email, password });
      dispatch({ type: 'success' });
    } catch (error) {
      dispatch({ type: 'error' });
    }
  };

  useEffect(() => {
    if (isFocused) {
      emailRef.current.focus();
    }
  }, [isFocused]);

  useEffect(() => {
    if (isLoggedIn) {
      const path = props.location?.state?.to || "/";
      history.replace(path);
    }
  }, [isLoggedIn]);

  return (
    <Card className="rounded mb-2">
      <div className="App">
        <div className="login-container">

          <form className="form" onSubmit={handleSubmit}>
            {error && <p className="error">{error} </p>}

            <p>Please Login!</p>

            <input
              type="text"
              ref={emailRef}
              placeholder="Enter email"
              value={email}
              autoFocus
              onChange={e =>
                dispatch({
                  type: 'field',
                  fieldName: 'email',
                  payload: e.currentTarget.value
                })
              }
            />
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={e =>
                dispatch({
                  type: 'field',
                  fieldName: 'password',
                  payload: e.currentTarget.value
                })
              }
            />
            <button className="submit" type="submit" disabled={isLoading}>
              {isLoading ? 'Logging In.....' : 'Log In'}
            </button>
          </form>

          <button className="register" onClick={() => history.push("/signup")}>Register</button>

        </div>
      </div>
    </Card>
  );
}
