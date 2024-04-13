import React, { useEffect, useState } from "react";
import "./css/MainPage.css";
import axios from "axios";

const MainPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    state();
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    sendLogout();
  };
  const sendLogout = () => {
    const url = "http://localhost:8080/logout";

    axios
      .post(url, { withCredentials: false })
      .then((response) => {
        window.alert("로그아웃이 완료되었습니다.");
      })
      .catch((error) => {
        window.alert("로그인 중 오류가 발생했습니다.");
        console.error("로그인 중 오류가 발생했습니다.", error);
      });
  };

  const state = () => {
    const url = "http://localhost:8080/member";

    axios
      .get(url, { withCredentials: true })
      .then((response) => {
        window.alert("회원정보 가져오기 완료되었습니다.");
        console.log(response.data);
      })
      .catch((error) => {
        window.alert("로그asdasdadadadsad인 중 오류가 발생했습니다.");
        console.error("로그인 중 오류가 발생했습니다.", error);
      });
  };
  return (
    <>
      <div>asd</div>
    </>
  );
};

export default MainPage;
