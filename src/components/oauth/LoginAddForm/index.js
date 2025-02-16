import React from "react";

import FormInput from "../FormInput";

function LoginAddForm({
  formData,
  error,
  success,
  handleChange,
  handleSubmit,
}) {
  return (
    <div className="container">
      <h2 className="title">회원정보입력</h2>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}

      <form onSubmit={handleSubmit} className="form">
        <FormInput
          label="이름"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <FormInput
          label="전화번호"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />

        <label className="label">소속(선택)</label>
        <FormInput
          label="학교"
          name="school"
          value={formData.school}
          onChange={handleChange}
        />
        <FormInput
          label="학과"
          name="department"
          value={formData.department}
          onChange={handleChange}
        />

        <div className="button-container">
          <button type="submit" className="button">
            완료 버튼
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginAddForm;
