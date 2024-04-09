import React, { useState } from "react";
import "./css/Register.css";

const Register = () => {
  const [userId, setUserId] = useState();
  const [pw, setPw] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();

  const registerMember = () => {};

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
      <button className="RegisterBtn">가입하기</button>
    </div>
  );
};

export default Register;
