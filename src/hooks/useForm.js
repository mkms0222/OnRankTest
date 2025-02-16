import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { authAPI } from "../api";

export const useForm = (initialState) => {
  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    try {
      const response = await authAPI.add(formData);

      if (response.data.success) {
        setSuccess(true);
        navigate("/");
      }
    } catch (err) {
      console.error("회원가입 중 오류 발생:", err);
      setError(
        err.response?.data?.message || "회원가입 처리 중 오류가 발생했습니다.",
      );
    }
  };

  return {
    formData,
    error,
    success,
    handleChange,
    handleSubmit,
  };
};
