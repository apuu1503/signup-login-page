"use client"

import React, { useState } from "react";
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";
import "./styles/styles.css"
const Home: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true); // Tracks which form is visible

  const toggleForm = () => {
    setIsLogin(!isLogin); // Toggle between Sign Up and Login
  };

  return (
    <div className="app">
      <div className="form-container">
        {isLogin ? (
          <>
            <LoginForm />
            <p className="toggle-text">
              Don't have an account? <span onClick={toggleForm}>Sign Up</span>
            </p>
          </>
        ) : (
          <>
            <SignUpForm />
            <p className="toggle-text">
              Already have an account? <span onClick={toggleForm}>Log In</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
