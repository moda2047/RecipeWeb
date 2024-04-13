// Header.js

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/Header.css";
import { useCookies } from "react-cookie";
import axios from "axios";

const Header = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["loggedIn"]);
  const navigate = useNavigate();

  const gohome = () => {
    navigate("/");
  };

  const sendLogout = () => {
    const url = "http://localhost:8080/logout";

    axios
      .get(url, { withCredentials: true })
      .then((response) => {
        window.alert("로그아웃이 완료되었습니다.");
        console.log(response);
        removeCookie("loggedIn");
      })
      .catch((error) => {
        window.alert("로그아웃 중 오류가 발생했습니다.");
        console.error("로그아웃 중 오류가 발생했습니다.", error);
      });
  };

  return (
    <header className="header">
      <h1 className="logo" onClick={gohome}>
        자취생 레시피
      </h1>
      <nav className="nav">
        {cookies.loggedIn ? (
          <>
            <div onClick={sendLogout}>로그아웃</div>
            <Link to="/mypage">마이페이지</Link>
          </>
        ) : (
          <>
            <Link to="/login">로그인</Link>
            <Link to="/register">회원가입</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
