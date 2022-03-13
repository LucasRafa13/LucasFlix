import React from 'react';

function FormField({ color, type, value, onChange, name, label }) {
  return (
    <div>
      <label>
        {label}:
        <input
          label={label}
          type={type}
          name={name}
          value={value.nome}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

export default FormField;
