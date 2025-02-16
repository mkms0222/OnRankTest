import "./index.css";

import React from "react";
import { useLocation } from "react-router-dom";

import LoginAddForm from "../../../components/oauth/LoginAddForm";
import { useForm } from "../../../hooks/useForm";

function LoginAdd() {
  const location = useLocation();
  const user = location.state?.user || { name: "", email: "" };

  const { formData, error, success, handleChange, handleSubmit } =
    useForm(user);

  return (
    <LoginAddForm
      formData={formData}
      error={error}
      success={success}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
}

export default LoginAdd;
