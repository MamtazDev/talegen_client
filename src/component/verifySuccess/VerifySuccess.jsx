
import TeleGenLogo from '../../assets/telegen_logo.svg';
import { Image } from 'react-bootstrap';

const VerifySuccess = () => {
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
                    <button className='commn-btn mb-4 mb-md-0'>
                        CONFIRM EMAIL

                        
                    </button>
                </div>
            </div>
        </div>
    )
}

export default VerifySuccess;