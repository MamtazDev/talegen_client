import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";
const employeCategory = [
  { value: "employer", label: "Employer" },
  { value: "universityCounselors", label: "University Counselors" },
];

const Employers = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState(null);
  const [employeeDetails, setEmployeeDetails] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleCategoryChange = (selectedOption) => {
    setCategory(selectedOption.label);
    setEmployeeDetails((prevEmployeeDetails) => ({
      ...prevEmployeeDetails,
      role: selectedOption.label,
    }));
  };
  const emailIsValid = /\S+@\S+\.\S+/.test(employeeDetails.email);

  /*     const singupHandler = (e) => {
    e.preventDefault();
    if (category === "Employer" && emailIsValid) {
      console.log("employee");
      localStorage.setItem("employee", JSON.stringify(employeeDetails));
      navigate("/employesignup");
    } else if (category === "University Counselors" && emailIsValid) {
      localStorage.setItem("University", JSON.stringify(employeeDetails));
      navigate("/universitycounselorsignup");
    } else {
      alert("All information is required");
    }
  }; */
  const singupHandler = (e) => {
    e.preventDefault();
    if (
      !employeeDetails.email ||
      !employeeDetails.role ||
      !employeeDetails.password ||
      !employeeDetails.confirmPassword
    ) {
      alert("All information is required");
      return;
    }

    // Check the email format
    if (!emailIsValid) {
      alert("Please enter a valid email address.");
      return;
    }
    if (employeeDetails.password !== employeeDetails.confirmPassword) {
      alert("Password do not match.");
      return;
    }
    if (category === "Employer") {
      console.log("employee");
      localStorage.setItem("employee", JSON.stringify(employeeDetails));
      navigate("/employesignup");
    } else if (category === "University Counselors") {
      localStorage.setItem("University", JSON.stringify(employeeDetails));
      navigate("/universitycounselorsignup");
    } else {
      alert("Invalid category selected.");
    }
  };

  return (
    <form type="submit" className="student_alumni">
      <h2 className="fs-4 fw-bold text-white mb-2">
        Employers & University Counselors
      </h2>
      <div className="ps-2">
        <div className="input_field">
          <label htmlFor="email" className="fs-6 text-white">
            Enter your work email to sign up*
          </label>
          <div className="input_field mb-2">
            <input
              id="email"
              type="email"
              className="w-100 bg-transparent border-white"
              placeholder="example@talengen.com"
              onChange={(e) =>
                setEmployeeDetails({
                  ...employeeDetails,
                  email: e.target.value,
                })
              }
              required
            />
          </div>
        </div>

        <div className="input_field">
          <label htmlFor="signup" className=" fs-6 text-white">
            Please choose your Category*
          </label>
          <div className="input_field mb-2">
            <Select
              placeholder="Select Category"
              options={employeCategory}
              // onChange={handleCategoryChange}
              // value={category}
              onChange={(selectedOption) =>
                handleCategoryChange(selectedOption)
              }
              theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                colors: {
                  ...theme.colors,
                  primary25: "#FF4700",
                  primary: "black",
                },
              })}
              styles={{
                control: (baseStyles) => ({
                  ...baseStyles,
                  backgroundColor: "transparant",
                  boxShadow: "white",
                }),

                dropdownIndicator: (baseStyles) => ({
                  ...baseStyles,
                  color: "white",
                }),

                indicatorSeparator: (baseStyles) => ({
                  ...baseStyles,
                  display: "none",
                }),

                menu: (baseStyles) => ({
                  ...baseStyles,
                  backgroundColor: "#9B1C19",
                }),

                menuList: (baseStyles) => ({
                  ...baseStyles,
                  color: "#fff",
                }),

                input: (baseStyles) => ({
                  ...baseStyles,
                  border: "white",
                  paddingTop: 0,
                  paddingBottom: 0,
                  margin: 0,
                }),

                singleValue: (baseStyles) => ({
                  ...baseStyles,
                  color: "white",
                }),

                placeholder: (baseStyles) => ({
                  ...baseStyles,
                  color: "#ffffff66",
                }),
              }}
            />
          </div>
        </div>

        <div className="input_field">
          <label htmlFor="password" className="fs-6 text-white">
            Password*
          </label>
          <div className="input_field mb-2">
            <input
              id="password"
              type="password"
              className="w-100 bg-transparent border-white"
              onChange={(e) =>
                setEmployeeDetails({
                  ...employeeDetails,
                  password: e.target.value,
                })
              }
              required
            />
          </div>
          {/* {passwordError && (
            <div style={{ color: "#FF4700" }}>{passwordError}</div>
          )} */}
        </div>

        <div className="input_field">
          <label htmlFor="password2" className="fs-6 text-white">
            Confirm Password*
          </label>
          <div className="input_field mb-2">
            <input
              required
              id="password2"
              type="password"
              className="w-100 bg-transparent border-white"
              onChange={(e) =>
                setEmployeeDetails({
                  ...employeeDetails,
                  confirmPassword: e.target.value,
                })
              }
            />
          </div>
        </div>
      </div>

      <div className="sign-up d-flex flex-wrap align-items-center justify-content-between">
        <button
          className="commn-btn text-white border-0 mb-4 mb-md-0"
          onClick={singupHandler}
          type="submit"
        >
          Sign Up
        </button>
        <Link to="/signin" className="text-decoration-none text-white">
          Already have an account? Sign in
        </Link>
      </div>
    </form>
  );
};

export default Employers;
