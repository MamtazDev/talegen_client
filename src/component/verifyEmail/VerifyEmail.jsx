/* eslint-disable no-unused-vars */
import { Link, useLocation, useNavigate } from "react-router-dom";
import TeleGenLogo from "../../assets/telegen_logo.svg";
import { Image } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import serverLink from './../../../config';

const VerifyEmail = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const email = searchParams.get("email");
  const reset = searchParams.get("reset");
  const signup = searchParams.get("signup");
  console.log(email);
  console.log(reset);
  console.log(signup);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const navigate = useNavigate();
  const url =serverLink
  const handleResetPassword = (e) => {
    e.preventDefault();
    setIsButtonDisabled(true);
    axios
      .post(
        `${url}/api/v1/users/${
          signup ? "resend-register" : reset ? "resend-reset" : ""
        }`,
        {
          email,
        }
      )
      .then((response) => {
        console.log("POST request successful:", response);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error making POST request:", error);
      })
      .finally(() => {
        setIsButtonDisabled(false);
      });
  };

  return (
    <div className="reset_wrapper">
      <div style={{ marginTop: "200px" }}>
        <div className="text-center">
          <h2 className="fs-3 fw-semibold text-white mb-4">
            Verify Your Email Address
          </h2>

          <p className="fs-6 fw-semibold text-white">
            You will need to verify your email address to complete registration
          </p>
        </div>

        <div className="text-center">
          <Image width={"30%"} src={TeleGenLogo} alt="logo" />
        </div>

        <p className="fs-6 fw-normal text-white text-center">
          An email has been sent to {email} with a link to verify your account.
          If you have not received the email after a few minutes, please check
          your spam folder.
        </p>

        <div className="text-center">
          <button
            onClick={handleResetPassword}
            className="commn-btn mb-4 mb-md-0"
          >
            {/* <Link
              to={"/verifysuccess"}
              className="text-decoration-none text-white"
            > */}

            {/* </Link> */}
            {isButtonDisabled ? (
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              " RESEND VERIFICATION EMAIL"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
