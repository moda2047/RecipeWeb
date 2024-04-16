import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./css/Mypage.css";
import axios from "axios";
import { useCookies } from "react-cookie";

const UpdatePage = () => {
  const navigate = useNavigate();
  const [memberInfo, setMemberInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();

  const getMember = async () => {
    const url = "http://localhost:8080/member";

    try {
      const response = await axios.get(url, { withCredentials: true });
      if (response.data.result) {
        console.log("사용자 정보를 가져오기 완료되었습니다.");
        console.log(response.data);
        setMemberInfo(response.data.data);
        setEmail(response.data.data.email);
        setName(response.data.data.name);
        setPhone(response.data.data.phone);
      } else {
        console.log("오류가 생겼습니다");
        setError("사용자 정보를 가져오는 중 오류가 발생했습니다.");
      }
    } catch (error) {
      console.error("사용자 정보를 가져오는 중 오류가 발생했습니다.", error);
      setError("사용자 정보를 가져오는 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getMember();
  }, []);
  const handleSave = async () => {
    const url = "http://localhost:8080/member/update";
    const data = {
      name: name,
      password: password,
      email: email,
      phone: phone,
    };
    try {
      const response = await axios.put(url, data, {
        withCredentials: true,
      });
      if (response.data.result) {
        console.log("사용자 정보가 성공적으로 수정되었습니다.");
        navigate("/Mypage");
      } else {
        console.log("오류가 생겼습니다");
        setError("사용자 정보를 수정하는 중 오류가 발생했습니다.");
      }
    } catch (error) {
      console.error("사용자 정보를 수정하는 중 오류가 발생했습니다.", error);
      setError("사용자 정보를 수정하는 중 오류가 발생했습니다.");
    }
  };
  const cancleBtn = () => {
    navigate("/Mypage");
  };
  if (loading) return <div className="Mypage-container">Loading...</div>;
  if (error) return <div className="Mypage-container">Error: {error}</div>;

  return (
    <div className="Mypage-container">
      <div>
        <label>ID:</label>
        <span>{memberInfo.id}</span>
      </div>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Phone:</label>
        <input
          type="text"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="MypageBthDiv">
        <button className="MypageBtn" onClick={handleSave}>
          저장
        </button>
        <button className="MypageBtn" onClick={cancleBtn}>
          취소
        </button>
      </div>
    </div>
  );
};

export default UpdatePage;
