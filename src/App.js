import React, { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setEmail('');
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div className="app">
      <div className="background">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <div className="container">
        <div className="content">
          <div className="header">
            <h1 className="title">
              Portfolio <span className="highlight">Coming Soon</span>
            </h1>
            <p className="subtitle">
              Building something worth your time. Get notified when it launches.
            </p>
          </div>

          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="email-input"
                required
              />
              <button type="submit" className="submit-btn">
                Notify Me
              </button>
            </div>
          </form>

          {submitted && (
            <div className="success-message">
              ✓ Thanks for signing up! We'll notify you soon.
            </div>
          )}

          <div className="features">
            <div className="feature">
              <div className="feature-icon">💻</div>
              <p>Work</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🛠️</div>
              <p>Skills</p>
            </div>
            <div className="feature">
              <div className="feature-icon">📧</div>
              <p>Contact</p>
            </div>
          </div>
        </div>

        <footer className="footer">
          <p>&copy; 2025. All rights reserved.</p>
          <div className="social-links">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">X</a>
            <span>•</span>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
