import React from 'react';
import './Form.css';

const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>Registration Successful!</h1>
      <img className='form-img-2' src='/images/success.svg' alt='success-image' />
    </div>
  );
};

export default FormSuccess;