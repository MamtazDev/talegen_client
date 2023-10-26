/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./ResetPassword.css";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const ResetPasswordVIew = () => {
  // eslint-disable-next-line no-unused-vars
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const email = params.get("email");
  console.log(email);

  const handleResetPassword = () => {
    const requestData = {
      old_password: oldPassword,
      new_password: newPassword,
    };

    axios
      .post(
        `https://talengen-server.onrender.com/api/v1/users/password/change-password/${email}`,
        requestData
      )
      .then((response) => {
        console.log("POST request successful:", response);
      })
      .catch((error) => {
        console.error("Error making POST request:", error);
      });
  };

  return (
    <div className="reset_wrapper align-items-center">
      <div className="resent-content">
        <div style={{ marginTop: "207px" }}>
          <div className="text-center">
            <h2 className="fs-3 fw-semibold text-white mb-4">
              Reset your Password
            </h2>
            <p className="fs-6 fw-semibold text-white">
              Enter a new password for account: {email}
            </p>
          </div>

          <div className="sign-up ps-2">
            <label htmlFor="old_password" className="text-white mb-2">
              Please enter your Old password*
            </label>
            <div className="input_field mb-2">
              <input
                onChange={(e) => setOldPassword(e.target.value)}
                id="old_password"
                type="password"
                className="w-100 bg-transparent border-white"
                name="old_password"
              />
            </div>
          </div>

          <div className="sign-up ps-2">
            <label htmlFor="new_password" className="text-white mb-2">
              Please confirm your new password*
            </label>
            <div className="input_field mb-2">
              <input
                onChange={(e) => setNewPassword(e.target.value)}
                id="new_password"
                type="password"
                className="w-100 bg-transparent border-white"
                name="new_password"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="text-center">
            <button
              className="commn-btn mb-4 mb-md-0"
              onClick={handleResetPassword}
            >
              RESET PASSWORD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordVIew;
