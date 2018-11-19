import React from 'react';

const InputWithLabel = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className="form-group">
    <label className="form-control-plaintext">{label}</label>
    <div>
      <input className="form-control" {...input} placeholder={label} type={type} />
      {(touched && (error && <div className="alert alert-danger">{error}</div>)) ||
        (warning && <div className="alert alert-warning">{warning}</div>)}
    </div>
  </div>
);

export default InputWithLabel;
