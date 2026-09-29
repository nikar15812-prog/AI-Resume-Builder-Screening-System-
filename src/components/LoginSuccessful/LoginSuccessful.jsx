import "./LoginSuccessful.css";

import loginImage from "../../assets/loginimage.png";
import circleTick from "../../assets/circletick.png";
import security from "../../assets/security.png";

const LoginSuccessful = () => {
  return (
    <div className="login-successful-page">

      <section className="successful-left">

        <div className="successful-header">
          <p>AI Resume Builder and Screening system</p>

          <h1>
            Build. Match. Succeed.
            <br />
            Your AI-powered career companion.
          </h1>
        </div>

        <div className="successful-image-wrapper">
          <img
            src={loginImage}
            alt="Login illustration"
            className="successful-image"
          />
        </div>

        <div className="successful-quote">
          <strong>
            “We're here to put a dent in the universe.”
          </strong>
          <span>— Steve Jobs</span>
        </div>

      </section>

      <section className="successful-right">

        <div className="successful-content">

          <img
            src={circleTick}
            alt="Login successful"
            className="successful-check"
          />

          <h2>Login Successful</h2>

          <h3>Welcome Back</h3>

          <p className="successful-description">
            You've successfully logged in,
            <br />
            you can access the software and
            <br />
            continue your work seamlessly.
          </p>

          <div className="successful-security">

            <img
              src={security}
              alt="Security"
              className="successful-security-icon"
            />

            <div className="successful-security-details">
              <strong>Your account is secure</strong>

              <p>
                Last Login: Today, 10:43
                <br />
                AM IP Address: 192.168.11
              </p>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default LoginSuccessful;