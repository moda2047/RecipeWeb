import React, { useState } from "react";
import "./css/Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [userId, setUserId] = useState();
  const [pw, setPw] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const navigate = useNavigate();
  const registerMember = () => {
    if (
      !userId.trim() ||
      !pw.trim() ||
      !name.trim() ||
      !email.trim() ||
      !phone.trim()
    ) {
      window.alert("모든 칸을 다 입력하세요");
      return;
    }

    const data = {
      id: userId,
      password: pw,
      email: email,
      name: name,
      phone: phone,
    };
    const url = "http://localhost:8080/register";

    axios
      .post(url, data, { withCredentials: true })
      .then((response) => {
        if (response.data.result) {
          window.alert("회원가입이 완료되었습니다.");
          console.log(response.data);
          navigate("/");
        } else if (response.data.code === "DuplicateError") {
          window.alert("아이디가 중복됩니다.");
          console.log(response.data.code);
        } else {
          window.alert("회원가입 중 문제가 생겼습니다.");
          console.log(response.data.code);
        }
      })
      .catch((error) => {
        window.alert("회원가입 중 오류가 발생했습니다.");
        console.error("회원가입 중 오류가 발생했습니다.", error);
      });
  };
  return (
    <div className="register-container">
      <h2>회원가입</h2>

      <div className="form-group">
        <label className="labelRegister">ID</label>
        <input
          className="RegisterInput"
          type="text"
          name="id"
          value={userId}
          onChange={(e) => {
            setUserId(e.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <label className="labelRegister">이메일</label>
        <input
          type="email"
          name="email"
          value={email}
          className="RegisterInput"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <label className="labelRegister">이름</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="RegisterInput"
        />
      </div>
      <div className="form-group">
        <label className="labelRegister">비밀번호</label>
        <input
          type="password"
          name="pw"
          value={pw}
          onChange={(e) => {
            setPw(e.target.value);
          }}
          className="RegisterInput"
        />
      </div>
      <div className="form-group">
        <label className="labelRegister">전화번호</label>
        <input
          type="text"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="RegisterInput"
        />
      </div>
      <button className="RegisterBtn" onClick={registerMember}>
        가입하기
      </button>
    </div>
  );
};

export default Register;
