import "./index.css";

import jwt_decode from "jwt-decode";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { authAPI } from "../../../api";
import GoogleLoginButton from "../../../components/oauth/GoogleLoginButton";

function Login() {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const onSuccess = async (response) => {
    console.log("Google 로그인 성공:", response);
    try {
      const decoded = jwt_decode(response.credential);
      console.log("Google User Info:", decoded);

      // 로그인 시도 (백엔드에서 isNewUser 값도 함께 반환)
      const loginResponse = await authAPI.login({
        email: decoded.email,
        googleId: decoded.sub,
      });

      const { isNewUser } = loginResponse.data;
      console.log("isNewUser 값:", isNewUser);

      if (isNewUser) {
        // 신규 사용자면 회원가입 페이지로
        navigate("/auth/add", { state: { user: decoded } });
      } else {
        // 기존 사용자면 메인 페이지로
        console.log("로그인 성공:", loginResponse.data);
        navigate("/");
      }
    } catch (err) {
      console.error("로그인 중 오류 발생:", err);
      setError("로그인 처리 중 오류가 발생했습니다.");
    }
  };

  const handleLoginError = () => {
    console.log("로그인 실패");
    setError("Google 로그인 실패");
  };

  return (
    <div className="login-container">
      <GoogleLoginButton onSuccess={onSuccess} onError={handleLoginError} />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default Login;
