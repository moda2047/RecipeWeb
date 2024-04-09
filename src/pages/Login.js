// Login.js

import React, { useState } from "react";
import "./css/Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // 로그인 처리 로직 추가
    console.log("Username:", username);
    console.log("Password:", password);
    // 여기에 실제 로그인 처리 로직을 추가하면 됩니다.
  };

  return (
    <div className="login-container">
      <h2 className="loginH2">Login</h2>

      <input
        type="text"
        placeholder="아이디"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="logininput"
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="logininput"
      />
      <button className="loginBtn">로그인</button>
    </div>
  );
};

export default Login;
