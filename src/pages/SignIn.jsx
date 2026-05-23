import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './SignIn.css';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [postRegisterMessage, setPostRegisterMessage] = useState('');

  useEffect(() => {
    if (location.state?.fromRegistration) {
      setPostRegisterMessage(
        'Account created. Please sign in with your email and password.'
      );
      navigate('/signin', { replace: true, state: {} });
    }
  }, [location.state, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    if (!email.includes('@')) {
      setError('Please enter a valid email');
      return;
    }

    const result = login(email, password);
    if (result.success) {
      setSuccess('Successfully logged in!');
      setTimeout(() => {
        navigate('/');
      }, 1500);
    } else if (result.code === 'NOT_REGISTERED') {
      setError(
        'No account found for this email. Please create an account first — use Sign up below.'
      );
    } else if (result.code === 'WRONG_PASSWORD') {
      setError('Invalid email or password');
    } else {
      setError('Please fill in all fields');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <Link to="/" className="auth-back" aria-label="Back to home">
          <span className="auth-back-arrow" aria-hidden="true">
            ←
          </span>
          Back
        </Link>
        <div className="auth-header">
          <h1>Sign In</h1>
          <p>Welcome back to Holly Zolly</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          {postRegisterMessage && (
            <div className="alert alert-success">{postRegisterMessage}</div>
          )}
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="form-input"
            />
          </div>

          {error && <div className="alert alert-error">{error}</div>}
          {success && <div className="alert alert-success">{success}</div>}

          <button type="submit" className="auth-button">
            Sign In
          </button>
        </form>

        <div className="auth-footer">
          <p>
            Don't have an account?{' '}
            <Link to="/signup" className="auth-link">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
