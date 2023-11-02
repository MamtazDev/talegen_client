
import { useLocation } from 'react-router-dom';
import TeleGenLogo from '../../assets/telegen_logo.svg';
import { Image } from 'react-bootstrap';
import Swal from "sweetalert2";
import { useState } from 'react';
import serverLink from '../../../config';
import axios from 'axios';



const VerifySuccess = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const email = searchParams.get("email");
    const otp = searchParams.get("otp");
    console.log("Email get from querry: ", email)

    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const url = serverLink;

    const confirmHandler = (e) => {
        e.preventDefault();
        setIsButtonDisabled(true);
        axios
          .post(`${url}/api/v1/users/verifyEmail?email=${email}&otp=${otp}`)
          .then((response) => {
            console.log("POST request successful:", response);
            Swal.fire("Your Verification is done.");
            // navigate(`/`);
          })
          .catch((error) => {
            console.error("Error making POST request:", error);
            console.log(error.response);
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
            });
          })
          .finally(() => {
            setIsButtonDisabled(false);
          });
      };



    return (
        <div className='reset_wrapper'>

            <div style={{ marginTop: '200px' }}>
                <div className='text-center'>
                    <Image width={'30%'} src={TeleGenLogo} alt='logo' />
                </div>
                <div className='text-center'>
                    <h2 className='fs-3 fw-semibold text-white mb-4'>
                        Verify Your Email Address
                    </h2>
                    <p className='fs-6 fw-semibold text-white'>
                        Verifying your email address gives you access to more features on TalenGen.
                        Click the button below to join our community of Talents!
                    </p>
                </div>
                <div className='text-center'>
                    <button disabled={isButtonDisabled} onClick={confirmHandler} className='commn-btn mb-4 mb-md-0'>
                      
                        {isButtonDisabled ? (
                    <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                    </div>
                    ) : (
                        "CONFIRM EMAIL"
                    )}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default VerifySuccess;