import "./index.css";

import { GoogleLogin } from "@react-oauth/google";
import React from "react";

import { authAPI } from "../../../api";

function GoogleLoginButton({ onError }) {
  const onSuccess = async (response) => {
    try {
      await authAPI.googleLogin();
      // 백엔드에서 리다이렉트 처리
    } catch (err) {
      onError();
    }
  };

  return (
    <div className="google-login-button">
      <GoogleLogin onSuccess={onSuccess} onError={onError} />
    </div>
  );
}

export default GoogleLoginButton;
