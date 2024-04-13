// Login.js
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./css/Login.css";
import axios from "axios";
import { useCookies } from "react-cookie";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookie] = useCookies(["loggedIn"]);
  const navigate = useNavigate();

  const sendLogin = () => {
    if (!username.trim() || !password.trim()) {
      window.alert("아이디와 비밀번호를 입력하세요.");
      return;
    }
    if (cookies.loggedIn) {
      window.alert("이미 로그인되어 있습니다.");
      return;
    }

    const data = {
      username: username,
      password: password,
    };
    const url = "http://localhost:8080/login";

    axios
      .post(url, data, { withCredentials: true })
      .then((response) => {
        window.alert("로그인이 완료되었습니다.");
        console.log(response.Cookies);
        setCookie("loggedIn", true, {
          path: "/",
          expires: new Date(Date.now() + 30 * 60 * 1000),
        });
        navigate("/");
      })
      .catch((error) => {
        window.alert("로그인 중 오류가 발생했습니다.");
        console.error("로그인 중 오류가 발생했습니다.", error);
      });
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      sendLogin();
    }
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
        onKeyPress={handleKeyPress}
      />
      <button className="loginBtn" onClick={sendLogin}>
        로그인
      </button>
    </div>
  );
};

export default Login;
