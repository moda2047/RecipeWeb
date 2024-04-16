import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./css/Mypage.css";
import axios from "axios";
import { useCookies } from "react-cookie";

const Mypage = () => {
  const navigate = useNavigate();
  const [memberInfo, setMemberInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cookies, setCookie, removeAllCookies] = useCookies();
  useEffect(() => {
    getMember();
  }, []);

  const getMember = async () => {
    const url = "http://localhost:8080/member";

    try {
      const response = await axios.get(url, { withCredentials: true });
      if (response.data.result) {
        console.log("사용자 정보를 가져오기 완료되었습니다.");
        console.log(response.data);
        setMemberInfo(response.data.data);
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

  const deleteMember = async () => {
    const url = "http://localhost:8080/member/delete";

    try {
      const response = await axios.delete(url, { withCredentials: true });
      if (response.data.result) {
        console.log("사용자 정보를 가져오기 완료되었습니다.");
        setMemberInfo("");
        removeAllCookies();
        navigate("/");
      } else {
        console.log("오류가 생겼습니다");
        setError("오류가 발생했습니다.");
      }
    } catch (error) {
      console.error("사용자 정보를 가져오는 중 오류가 발생했습니다.", error);
      setError("사용자 정보를 가져오는 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  const goUpdate = () => {
    navigate("/UpdateMember");
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
        <span>{memberInfo.name}</span>
      </div>
      <div>
        <label>Email:</label>
        <span>{memberInfo.email}</span>
      </div>
      <div>
        <label>Phone:</label>
        <span>{memberInfo.phone}</span>
      </div>

      <div className="MypageBthDiv">
        <button className="MypageBtn" onClick={goUpdate}>
          수정
        </button>
        <button className="MypageBtn" onClick={deleteMember}>
          탈퇴
        </button>
      </div>
    </div>
  );
};

export default Mypage;
