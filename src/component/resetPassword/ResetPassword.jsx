/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./ResetPassword.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const ResetPassword = () => {
  // eslint-disable-next-line no-unused-vars
  const [resetPassword, setResetPassword] = useState(false);
  const [email, setEmail] = useState(null);
  const navigate = useNavigate();
  const handleResetPassword = (e) => {
    // if (email === null  ) {
    //   alert("please provide email first")
    // }

    e.preventDefault();
    axios
      .post(
        "https://talengen-server.onrender.com/api/v1/users/forgot-password",
        {
          email: email,
        }
      )
      .then((response) => {
        console.log("POST request successful:", response);
        setResetPassword(true);
        setEmail("");
        navigate(`/reset?email=${email}`);
      })
      .catch((error) => {
        console.error("Error making POST request:", error);
      });
  };

  return (
    <div className="reset_wrapper d-flex align-items-center">
      <form
        type="submit"
        className="resent-content"
        onSubmit={handleResetPassword}
      >
        <div className="text-center">
          <h2 className="fs-3 fw-semibold text-white mb-4">
            Reset your Password
          </h2>
          <p className="fs-6 fw-semibold text-white">
            Please provide the email address that you used when you signed up
            for your account. If you forgot your email, please
            <Link className="text-white">contact us</Link>.
          </p>
        </div>

        <div className="sign-up p-2">
          <label htmlFor="emailAddress" className="text-white mb-2">
            Email Address*
          </label>
          <div className="input_field mb-2">
            <input
              onChange={(e) => setEmail(e.target.value)}
              id="emailAddress"
              type="email"
              className="w-100 bg-transparent border-white"
              placeholder="example@gmail.com"
              required
              value={email}
            />
          </div>
        </div>

        <p className="fs-6 fw-normal text-white text-center">
          We will send you an email that will allow you to reset your password.
        </p>

        <div>
          <div className="text-center">
            <button
              className="commn-btn mb-4 mb-md-0"
              // onClick={handleResetPassword}
              type="submit"
            >
              RESET PASSWORD
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
