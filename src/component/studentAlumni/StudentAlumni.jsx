import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const StudentAlumni = () => {
  const [email, setEmail] = useState(null);
  const navigate = useNavigate();

  const singupHandler = () => {
    console.log("student email:", email);
    const emailIsValid = /\S+@\S+\.\S+/.test(email);
    if (emailIsValid) {
      localStorage.setItem("student", email);
      navigate("/studentsignup");
    }
    
  };

  return (
    <form className="student_alumni">
      <h2 className="fs-4 fw-bold text-white mb-2">Students & Alumni</h2>

      <div className="sign-up p-2">
        <label htmlFor="signup" className="text-white">
          Enter your student email to sign up*
        </label>
        <div className="input_field mb-2">
          <input
            type="email"
            id="signup"
            className="w-100 bg-transparent border-white"
            placeholder="example@um.edu"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>

      <div className="sign-up d-flex flex-wrap align-items-center justify-content-between border-bottom pb-4 mb-4">
        <button type="submit" className="commn-btn mb-4 mb-md-0" onClick={singupHandler}>
          Sign Up
        </button>
        <Link to={"/signin"} className=" text-decoration-none text-white">
          Already have an account? Sign in
        </Link>
      </div>
    </form>
  );
};

export default StudentAlumni;
