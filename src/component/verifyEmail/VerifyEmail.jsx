import { Link, useLocation } from "react-router-dom";
import TeleGenLogo from "../../assets/telegen_logo.svg";
import { Image } from "react-bootstrap";

const VerifyEmail = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const email = searchParams.get("email");
  console.log(email);



  
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
          An email has been sent to {email} with a link to verify your
          account. If you have not received the email after a few minutes,
          please check your spam folder.
        </p>

        <div className="text-center">
          <button className="commn-btn mb-4 mb-md-0">
            <Link
              to={"/verifysuccess"}
              className="text-decoration-none text-white"
            >
              RESEND VERIFICATION EMAIL
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
