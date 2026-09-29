import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Login.css";

import loginImage from "../../assets/loginimage.png";
import googleIcon from "../../assets/google.png";
import linkedinIcon from "../../assets/linkedin.png";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Add your login API here
    navigate("/login-successful");
  };

  return (
    <div className="login-page">

      {/* LEFT */}
      <div className="login-left">

        <div className="login-header">
          <p>AI Resume Builder and Screening system</p>

          <h1>
            Build. Match. Succeed.
            <br />
            Your AI-powered career companion.
          </h1>
        </div>

        <div className="login-image-wrapper">
          <img
            src={loginImage}
            alt="Login"
            className="login-image"
          />
        </div>

        <div className="login-quote">
          <strong>“We're here to put a dent in the universe.”</strong>
          <span>— Steve Jobs</span>
        </div>

      </div>

      {/* LOGIN FORM */}
      <div className="login-right">

        <div className="login-container">

          <h2>
            Login
            <span className="login-logo">✦</span>
          </h2>

          <form onSubmit={handleLogin}>

            <label>Email address</label>

            <input
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="password-label">
              <label>Password</label>

              <button
                type="button"
                className="forgot-btn"
                onClick={() => navigate("/forgot-password")}
              >
                Forgot?
              </button>
            </div>

            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit" className="login-btn">
              Log in
            </button>

            <button
              type="button"
              className="signup-btn"
              onClick={() => navigate("/signup")}
            >
              Sign up
            </button>

          </form>

          <div className="login-divider">
            <span />
            <small>OR</small>
            <span />
          </div>

          <p className="continue-text">CONTINUE WITH</p>

          <div className="social-login">

            <button type="button">
              <img src={googleIcon} alt="Google" />
            </button>

            <button type="button">
              <img src={linkedinIcon} alt="LinkedIn" />
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Login;