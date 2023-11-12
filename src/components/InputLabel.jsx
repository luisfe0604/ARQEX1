// LabelInput.js
import React from "react";

function LabelInput({ label, type, name, value, onChange }) {
  return (
    <div style={{display: 'flex',flexDirection: "column"}}>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} id={name} value={value} onChange={onChange} />
    </div>
  );
}

export default LabelInput;
