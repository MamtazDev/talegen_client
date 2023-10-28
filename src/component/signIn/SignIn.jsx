import { useState } from "react";
import TeleGenLogo from "../../assets/telegen_logo.svg";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const [loginSate, setLoginState] = useState({
    email: "",
    password: "",
  });
  const [loginSate1, setLoginState1] = useState({
    email: "",
    password: "",
  });
  // eslint-disable-next-line no-unused-vars
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isButtonDisabled1, setIsButtonDisabled1] = useState(false);

  const singinHandler = (e) => {
    e.preventDefault();
    setIsButtonDisabled(true);
    axios
      .post(
        "https://talengen-server.onrender.com/api/v1/users/login",
        loginSate
      )
      .then((response) => {
        console.log("Logged in successfully", response);
      })
      .catch((error) => {
        console.error("Error making POST request:", error);
      })
      .finally(() => {
        setLoginState({
          email: "",
          password: "",
        });
        setIsButtonDisabled(false);
      });
  };
  const singinHandler1 = (e) => {
    e.preventDefault();
    setIsButtonDisabled1(true);
    axios
      .post(
        "https://talengen-server.onrender.com/api/v1/users/login",
        loginSate1
      )
      .then((response) => {
        console.log("Logged in successfully", response);
      })
      .catch((error) => {
        console.error("Error making POST request:", error);
      })
      .finally(() => {
        setLoginState({
          email: "",
          password: "",
        });
        setIsButtonDisabled1(false);
      });
  };

  return (
    <>
      <div className="main_wrapper">
        <div className="section-head text-center mt-3 mb-5">
          <Image src={TeleGenLogo} alt="logo" />
          <h2 className="fs-2 fw-semibold text-white mb-4">Sign In TalenGen</h2>
          <p className="fs-4 fw-semibold text-white">
            Get Ready to Empower your Recruiting Journey
          </p>
        </div>

        <form onSubmit={(e) => singinHandler(e)}>
          <div className="sign-up p-2">
            <label htmlFor="studentEmail" className="text-white">
              Enter your Student Email*
            </label>
            <div className="input_field mb-2">
              <input
                onChange={(e) =>
                  setLoginState({ ...loginSate, email: e.target.value })
                }
                value={loginSate.email}
                id="studentEmail"
                type="email"
                className="w-100 bg-transparent border-white"
                placeholder="example@um.edu"
                required
              />
            </div>
            <div className="input_field mb-2">
              <label htmlFor="password" className="fs-6 text-white">
                Enter your Student Password*
              </label>
              <div className="input_field mb-2">
                <input
                  required
                  onChange={(e) =>
                    setLoginState({ ...loginSate, password: e.target.value })
                  }
                  id="password"
                  type="password"
                  className="w-100 bg-transparent border-white"
                  value={loginSate.password}
                />
              </div>
            </div>
          </div>

          <div className="sign-up d-flex flex-wrap align-items-center justify-content-between border-bottom pb-4 mb-4">
            <button
              type="submit"
              className="commn-btn mb-4 mb-md-0"
              disabled={isButtonDisabled}
            >
              {isButtonDisabled ? (
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                "Sign In"
              )}
            </button>
            <Link
              to={"/resetpassword"}
              className="text-decoration-none text-white"
            >
              Forgot your password?
            </Link>
          </div>
        </form>

        {/* ___________________________******************************_________________________ */}

        {/* ___________________________******************************_________________________ */}

        <form
          type="submit"
          className="student_alumni"
          onSubmit={(e) => singinHandler1(e)}
        >
          <h2 className="fs-4 fw-bold text-white mb-3">
            Employers & University Counselors
          </h2>

          <div>
            <div className="ps-2">
              <label htmlFor="workEmail" className=" fs-6 text-white">
                Enter your Work Email*
              </label>
              <div className="input_field mb-2">
                <input
                  required
                  onChange={(e) =>
                    setLoginState1({ ...loginSate1, email: e.target.value })
                  }
                  id="workEmail"
                  type="email"
                  className="w-100 bg-transparent border-white"
                  placeholder="example@talengen.com"
                  value={loginSate1.email}
                />
              </div>
            </div>

            <div className="ps-2">
              <label htmlFor="password2" className=" fs-6 text-white">
                Enter your Password*
              </label>
              <div className="input_field mb-2">
                <input
                  required
                  onChange={(e) =>
                    setLoginState1({ ...loginSate1, password: e.target.value })
                  }
                  id="password2"
                  type="password"
                  className="w-100 bg-transparent border-white"
                  value={loginSate1.password}
                />
              </div>
            </div>

            <div className="sign-up d-flex flex-wrap align-items-center justify-content-between">
              <button
                type="submit"
                className="commn-btn text-white border-0 mb-4 mb-md-0"
                disabled={isButtonDisabled1}
              >
                {isButtonDisabled1 ? (
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  "Sign In"
                )}
              </button>
              <Link
                to={"/resetpassword"}
                className="text-decoration-none text-white"
              >
                Forgot your password?
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignIn;
