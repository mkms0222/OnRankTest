import "./index.css";

import React, { useState } from "react";

import GoogleLoginButton from "../../../components/oauth/GoogleLoginButton";

function Login() {
  const [error, setError] = useState(null);

  const handleLoginError = () => {
    console.log("로그인 실패");
    setError("Google 로그인 실패");
  };

  return (
    <div className="login-container">
      <GoogleLoginButton onError={handleLoginError} />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default Login;
