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
              My <span className="highlight">Portfolio</span> is Coming Soon
            </h1>
            <p className="subtitle">
              Showcasing my projects, skills, and experience. Stay tuned for the launch!
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
              <div className="feature-icon">�</div>
              <p>Projects</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🎯</div>
              <p>Skills</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🚀</div>
              <p>Experience</p>
            </div>
          </div>
        </div>

        <footer className="footer">
          <p>&copy; 2025. All rights reserved.</p>
          <div className="social-links">
            <a href="#twitter">Twitter</a>
            <span>•</span>
            <a href="#facebook">Facebook</a>
            <span>•</span>
            <a href="#instagram">Instagram</a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
