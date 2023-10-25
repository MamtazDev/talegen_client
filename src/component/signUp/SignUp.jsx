import { Image } from "react-bootstrap";
import TeleGenLogo from "../../assets/telegen_logo.svg";
import "./signUp.css";
import StudentAlumni from "../studentAlumni/StudentAlumni";
import Employers from "../employers/Employers";

const SignUp = () => {
  return (
    <div className="main_wrapper">
      <div className="section-head text-center mt-3 mb-5">
        <Image src={TeleGenLogo} alt="logo" />
        <h2 className="fs-2 fw-semibold text-white mb-4">Sign In TalenGen</h2>
        <p className="fs-4 fw-semibold text-white">Join TalenGen Now</p>
      </div>
      <StudentAlumni />
      <Employers />
    </div>
  );
};

export default SignUp;
