import { useState } from "react";
import { Link } from "react-router-dom";

import "./CreatePassword.css";

import amico from "../../assets/createpassword.png";
import googleIcon from "../../assets/google.png";
import linkedinIcon from "../../assets/linkedin.png";

const CreatePassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      alert("Please enter both password fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    console.log("Password reset successfully");
  };

  return (
    <div className="create-password-page">

      {/* LEFT SIDE */}
      <div className="create-password-left">

        <div className="create-password-header">
          <p>AI Resume Builder and Screening system</p>

          <h1>
            Where Talent Meets Intelligence
            <br />
            AI Intelligent
          </h1>
        </div>

        <div className="create-password-image-wrapper">
          <img
            src={amico}
            alt="Create password illustration"
            className="create-password-image"
          />
        </div>

        <div className="password-quote">
          <strong>
            “Coming together is a beginning. Keeping together is progress.
            Working together is success.”
          </strong>

          <span>— Henry Ford</span>
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="create-password-right">

        <div className="create-password-container">

          <h2>Create a New Password</h2>

          <p className="create-password-subtitle">
            Please Enter and confirm New Password Below
          </p>

          <form onSubmit={handleSubmit}>

            <label htmlFor="new-password">
              New Password
            </label>

            <input
              id="new-password"
              type="password"
              placeholder="Enter new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <label htmlFor="confirm-password">
              Confirm Password
            </label>

            <input
              id="confirm-password"
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <button type="submit">
              Reset Password
            </button>

          </form>

          <p className="remember-password">
            Remember your password?
            <Link to="/login">Login</Link>
          </p>

          <div className="continue-divider">
            <span></span>

            <small>OR</small>
            <span></span>
        
          </div>
          <small className="continue-text">CONTINUE WITH</small>

          <div className="social-login">

            <button type="button">
              <img
                src={googleIcon}
                alt="Google"
              />
            </button>

            <button type="button">
              <img
                src={linkedinIcon}
                alt="LinkedIn"
              />
            </button>

          </div>

          <p className="help-text">
            Need help &amp;
            <a href="#">
              Contact Admin
            </a>
          </p>

        </div>

      </div>

    </div>
  );
};

export default CreatePassword;