import React, { useState } from 'react';

// Define CSS styles as a template literal
const loginSignupStyles = `
  /* General Styles */
  .login-signup-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    background-color: #add8e6; /* Light blue background */
    color: #333;
    text-align: center;
  }

  /* Form Heading */
  .login-signup-container h2 {
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: bold;
  }

  /* Form Group */
  .form-group {
    margin-bottom: 15px;
  }

  /* Label */
  .form-group label {
    display: block;
    margin-bottom: 5px;
    color: #555;
  }

  /* Input Fields */
  .form-group input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
    color: #333;
    background-color: #e0e0e0; /* Light gray background for inputs */
  }

  /* Submit Button */
  button[type="submit"] {
    width: 100%;
    padding: 12px;
    background-color: #007acc; /* Dark blue color for submit button */
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    margin-bottom: 10px;
  }

  button[type="submit"]:hover {
    background-color: #005f9e; /* Darker shade of blue on hover */
  }

  /* Toggle Button */
  button[type="button"] {
    background: none;
    color: #007acc; /* Dark blue color */
    border: none;
    cursor: pointer;
    font-weight: bold;
    text-decoration: underline;
  }

  button[type="button"]:hover {
    color: #005f9e; /* Darker shade of blue on hover */
  }
`;

// Function to inject styles into the document head
const injectStyles = (styles) => {
  const styleElement = document.createElement('style');
  styleElement.innerHTML = styles;
  document.head.appendChild(styleElement);
};

// Inject the styles into the document head
injectStyles(loginSignupStyles);

const LoginSignup = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    mode: 'login',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Define the API endpoint based on the form mode
    const apiEndpoint = formData.mode === 'login' ? '/api/login' : '/api/signup';
    
    try {
        // Make an API call
        const response = await fetch(apiEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: formData.email,
                password: formData.password,
                ...(formData.mode === 'signup' && { confirmPassword: formData.confirmPassword }),
            }),
        });

        const data = await response.json();
        
        if (response.ok) {
            // Handle successful login or signup
            console.log('Success:', data);
            // Save authentication information (e.g., JWT) in local storage
            localStorage.setItem('authToken', data.token);
            // Redirect user if necessary (e.g., using react-router-dom)
            // window.location.href = '/dashboard'; // Example redirect
        } else {
            // Handle error response
            console.error('Error:', data);
            // Provide user feedback about the error
        }
    } catch (error) {
        // Handle network or other errors
        console.error('Request failed:', error);
    }
  };

  // Toggle between login and signup mode
  const toggleMode = () => {
    setFormData((prevData) => ({
      ...prevData,
      mode: prevData.mode === 'login' ? 'signup' : 'login',
    }));
  };

  // Render the form component
  return (
    <div className="login-signup-container">
      <form onSubmit={handleSubmit}>
        <h2>{formData.mode === 'login' ? 'Login' : 'Signup'}</h2>
        
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        {formData.mode === 'signup' && (
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
        )}

        <button type="submit">
          {formData.mode === 'login' ? 'Login' : 'Signup'}
        </button>

        {formData.mode === 'login' && (
          <p>
            Don’t have an account?
            <button type="button" onClick={toggleMode}>
              Sign Up
            </button>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginSignup;