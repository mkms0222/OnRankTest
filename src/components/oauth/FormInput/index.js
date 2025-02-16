import React from "react";

function FormInput({ label, name, value, onChange, required = false }) {
  return (
    <div className="input-container">
      <label className="label">{label}</label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="input"
      />
    </div>
  );
}

export default FormInput;
