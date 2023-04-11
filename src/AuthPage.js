import React, { useState } from "react";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import axios from "axios";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isLogin) {
      try {
        const response = await axios.post("http://localhost:3000/login", {
          name,
          password,
        });
        console.log(response.data);
      } catch (error) {
        console.log(error.message);
      }
    } else {
      try {
        const response = await axios.post("http://localhost:3000/register", {
          name,
          //email,
          password,
          //confirmPassword,
        });
        console.log(response.data);
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  return (
    <div>
      {isLogin ? (
        <LoginForm
          name={name}
          password={password}
          setName={setName}
          setPassword={setPassword}
          handleSubmit={handleSubmit}
        />
      ) : (
        <RegisterForm
          name={name}
          email={email}
          password={password}
          confirmPassword={confirmPassword}
          setName={setName}
          setEmail={setEmail}
          setPassword={setPassword}
          setConfirmPassword={setConfirmPassword}
          handleSubmit={handleSubmit}
        />
      )}
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Create an account" : "Login"}
      </button>
    </div>
  );
};

export default AuthPage;
