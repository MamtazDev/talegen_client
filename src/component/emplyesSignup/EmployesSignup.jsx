import { useState } from "react";
import TeleGenLogo from "../../assets/telegen_logo.svg";
import { useNavigate } from "react-router-dom";
import { Image } from "react-bootstrap";
import axios from "axios";

const EmployesSignup = () => {
  const navigate = useNavigate();
  const employee = JSON.parse(localStorage.getItem("employee"));
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const [employeeDetails, setEmployeeDetails] = useState({
    username: "",
    institution: "",
    currentPosition: "",
    contact: "",
    registrationNumber: "",
    email: employee?.email,
    password: employee?.password,
    role: employee?.role,
  });

  const singupHandler = (e) => {
    e.preventDefault();
    setIsButtonDisabled(true);
    axios
      .post(
        "https://talengen-server.onrender.com/api/v1/users/signup",
        employeeDetails
      )
      .then((response) => {
        console.log("POST request successful:", response);
        navigate(`/verifyemail?email=${employeeDetails.email}&signup=true`);
      })
      .catch((error) => {
        console.error("Error making POST request:", error);
        console.log(error.response);
      })
      .finally(() => {
        setIsButtonDisabled(false);
      });
  };
  return (
    <div className="main_wrapper">
      <div className="section-head text-center mt-3 mb-5">
        <Image src={TeleGenLogo} alt="logo" />
        <h2 className="fs-2 fw-semibold text-white mb-4">Sign In TalenGen</h2>

        <p className="fs-4 fw-semibold text-white">Join TalenGen Now</p>
      </div>

      <div className="student_alumni">
        <h2 className="fs-4 fw-bold text-white mb-2">Employers</h2>

        <form onSubmit={(e) => singupHandler(e)}>
          <div className="sign-up p-2">
            <label htmlFor="preferredName" className="text-white mb-2">
              Enter your Preferred Name*
            </label>
            <div className="input_field mb-2">
              <input
                required
                onChange={(e) =>
                  setEmployeeDetails({
                    ...employeeDetails,
                    username: e.target.value,
                  })
                }
                id="preferredName"
                type="text"
                className="w-100 bg-transparent border-white"
              />
            </div>
            <div className="input_field mb-2">
              <label htmlFor="currentCompany" className=" fs-6 text-white mb-2">
                Enter your Current Company Name*
              </label>
              <div className="input_field mb-2">
                <input
                  required
                  onChange={(e) =>
                    setEmployeeDetails({
                      ...employeeDetails,
                      institution: e.target.value,
                    })
                  }
                  id="currentCompany"
                  type="text"
                  className="w-100 bg-transparent border-white"
                />
              </div>
            </div>

            <div className="input_field mb-2">
              <label
                htmlFor="currentPosition"
                className=" fs-6 text-white mb-2"
              >
                Enter your Current Position*
              </label>
              <div className="input_field mb-2">
                <input
                  required
                  onChange={(e) =>
                    setEmployeeDetails({
                      ...employeeDetails,
                      currentPosition: e.target.value,
                    })
                  }
                  id="currentPosition"
                  type="text"
                  className="w-100 bg-transparent border-white"
                />
              </div>
            </div>

            <div className="input_field mb-2">
              <label
                htmlFor="preferredContact"
                className=" fs-6 text-white mb-2"
              >
                Enter your Preferred Contact Number*
              </label>
              <div className="input_field mb-2">
                <input
                  onChange={(e) =>
                    setEmployeeDetails({
                      ...employeeDetails,
                      contact: e.target.value,
                    })
                  }
                  id="preferredContact"
                  type="number"
                  className="w-100 bg-transparent border-white"
                  required
                />
              </div>
            </div>

            <div className="input_field mb-2">
              <label
                htmlFor="registrationNumber"
                className=" fs-6 text-white mb-2"
              >
                Enter your Company Registration Number*
              </label>
              <div className="input_field mb-2">
                <input
                  onChange={(e) =>
                    setEmployeeDetails({
                      ...employeeDetails,
                      registrationNumber: e.target.value,
                    })
                  }
                  id="registrationNumber"
                  type="number"
                  required
                  className="w-100 bg-transparent border-white"
                />
              </div>
            </div>
          </div>

          <div className="sign-up d-flex flex-wrap align-items-center justify-content-between pb-4 mb-4">
            <button
              disabled={isButtonDisabled}
              className="commn-btn mb-4 mb-md-0"
              type="submit"
            >
              {isButtonDisabled ? (
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployesSignup;
