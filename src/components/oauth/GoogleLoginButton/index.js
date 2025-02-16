import "./index.css";

import { GoogleLogin } from "@react-oauth/google";
import React from "react";

function GoogleLoginButton({ onSuccess, onError }) {
  return (
    <div className="google-login-button">
      <GoogleLogin onSuccess={onSuccess} onError={onError} />
    </div>
  );
}

export default GoogleLoginButton;
