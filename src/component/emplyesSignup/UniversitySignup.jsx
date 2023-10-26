import  { useState } from "react";
import TeleGenLogo from "../../assets/telegen_logo.svg";
import {  useNavigate } from "react-router-dom";
import { Image } from "react-bootstrap";
import axios from "axios";

const UniversitySignup = () => {
  const navigate = useNavigate();
  const employee = JSON.parse(localStorage.getItem("employe"));
  const [employeeDetails, setEmployeeDetails] = useState({
    username: "",
    institude: "",
    currentPosition: "",
    contact: "",
    registrationNumber: "",
    email: employee.email,
    password: employee.password,
  });

  const singupHandler = () => {
    console.log("EmployeeDetails", employeeDetails);

    axios
      .post(
        "https://talengen-server.onrender.com/api/v1/users/signup",
        employeeDetails
      )
      .then((response) => {
        // Handle the successful response here
        console.log("POST request successful:", response);
      })
      .catch((error) => {
        // Handle any errors that occurred during the POST request
        // Handle any errors that occurred during the POST request
        console.error("Error making POST request:", error);
      });

    navigate(`/verifyemail?email=${employeeDetails.email}`);
    // navigate('/verifyemail');
  };

  return (
    <div className="main_wrapper">
      <div className="section-head text-center mt-3 mb-5">
        <Image src={TeleGenLogo} alt="logo" />
        <h2 className="fs-2 fw-semibold text-white mb-4">Sign In TalenGen</h2>

        <p className="fs-4 fw-semibold text-white">
          Get Ready to Empower your Recruiting Journey
        </p>
      </div>

      <div className="student_alumni">
        <h2 className="fs-4 fw-bold text-white mb-2">
          Employers & University Counselors
        </h2>

        <div>
          <div className="sign-up p-2">
            <label htmlFor="preferredName" className="text-white mb-2">
              Enter your Preferred Name*
            </label>
            <div className="input_field mb-2">
              <input
                onBlur={(e) =>
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
                Enter your Current Company/Institution Name*
              </label>
              <div className="input_field mb-2">
                <input
                  onBlur={(e) =>
                    setEmployeeDetails({
                      ...employeeDetails,
                      institude: e.target.value,
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
                  onBlur={(e) =>
                    setEmployeeDetails({
                      ...employeeDetails,
                      position: e.target.value,
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
                  onBlur={(e) =>
                    setEmployeeDetails({
                      ...employeeDetails,
                      contact: e.target.value,
                    })
                  }
                  id="preferredContact"
                  type="number"
                  className="w-100 bg-transparent border-white"
                />
              </div>
            </div>

            <div className="input_field mb-2">
              <label
                htmlFor="registrationNumber"
                className=" fs-6 text-white mb-2"
              >
                Enter your Company/Institution Registration Number*
              </label>
              <div className="input_field mb-2">
                <input
                  onBlur={(e) =>
                    setEmployeeDetails({
                      ...employeeDetails,
                      registrationNo: e.target.value,
                    })
                  }
                  id="registrationNumber"
                  type="number"
                  className="w-100 bg-transparent border-white"
                />
              </div>
            </div>
          </div>

          <div className="sign-up d-flex flex-wrap align-items-center justify-content-between pb-4 mb-4">
            <button className="commn-btn mb-4 mb-md-0" onClick={singupHandler}>
              {/* <Link to={'/verifyemail'} className='text-decoration-none text-white'> */}
              Sign Up
              {/* </Link> */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversitySignup;
