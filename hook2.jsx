import React, { useRef, useState } from 'react';

const Form = () => {
  // useRef for each form input and their corresponding error messages
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Validation functions
  const validateName = () => {
    const name = nameRef.current.value.trim();
    setNameError(name ? '' : 'Name is required');
  };

  const validateEmail = () => {
    const email = emailRef.current.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    setEmailError(emailRegex.test(email) ? '' : 'Invalid email address');
  };

  const validatePassword = () => {
    const password = passwordRef.current.value.trim();
    setPasswordError(password.length >= 6 ? '' : 'Password must be at least 6 characters');
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all inputs
    validateName();
    validateEmail();
    validatePassword();

    // Check if any errors exist before submitting
    if (nameError || emailError || passwordError) {
      alert('Please fix the form errors before submitting.');
    } else {
      // Submit the form or perform any other action
      alert('Form submitted successfully!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" ref={nameRef} onChange={validateName} />
        <span style={{ color: 'red' }}>{nameError}</span>
      </div>

      <div>
        <label>Email:</label>
        <input type="text" ref={emailRef} onChange={validateEmail} />
        <span style={{ color: 'red' }}>{emailError}</span>
      </div>

      <div>
        <label>Password:</label>
        <input type="password" ref={passwordRef} onChange={validatePassword} />
        <span style={{ color: 'red' }}>{passwordError}</span>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
