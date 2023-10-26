import { useState } from "react";
import TeleGenLogo from "../../assets/telegen_logo.svg";
import { Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Select from "react-select";
const options = [
  { value: "(UM)", label: "University Malaya(UM)" },
  { value: "(USM)", label: "Universiti Sains Malaysia(USM)" },
  { value: "(UKM)", label: "Universiti Kebangsaan Malaysia(UKM)" },
  { value: "(UPM)", label: "Universiti Putra Malaysia(UPM)" },
  { value: "(UTM)", label: "Universiti Teknologi Malaysia(UTM)" },
  { value: "(UiTM)", label: "Universiti Teknologi MARA(UiTM)" },
  { value: "(UIAM)", label: "Universiti Islam Antarabangsa Malaysia(UIAM)" },
  { value: "(UUM)", label: "Universiti Utara Malaysia(UUM)" },
  { value: "(UNIMAS)", label: "Universiti Malaysia Sarawak(UNIMAS)" },
  { value: "(UMS)", label: "Universiti Malaysia Sabah(UMS)" },
  { value: "(UPSI)", label: "Universiti Pendidikan Sultan Idris(UPSI)" },
  { value: "(USIM)", label: "Universiti Sains Islam Malaysia(USIM)" },
  { value: "(UMT)", label: "Universiti Malaysia Terengganu(UMT)" },
  { value: "(UTHM)", label: "Universiti Tun Hussein Onn Malaysia(UTHM)" },
  { value: "(UTeM)", label: "Universiti Teknikal Malaysia Melaka(UTeM)" },
  { value: "(MMU)", label: "Multimedia University(MMU)" },
  { value: "(UNITEN)", label: "Cyberjaya Universiti Tenaga Nasional(UNITEN)" },
  { value: "(UniRAZAK)", label: "Universiti Tun Abdul Razak(UniRAZAK)" },
  { value: "(UTP)", label: "Universiti Teknologi Petronas(UTP)" },
  { value: "(IMU)", label: "International Medical University(IMU)" },
  { value: "(UNISEL)", label: "Universiti Selangor(UNISEL)" },
  { value: "(OUM)", label: "Open University Malaysia(OUM)" },
  {
    value: "(MUST)",
    label: "Malaysia University of Science & Technology(MUST)",
  },
  { value: "(UTAR)", label: "University Universiti Tunku Abdul Rahman(UTAR)" },
  { value: "(UniKL)", label: "Universiti Kuala Lumpur(UniKL)" },
  { value: "(WOU)", label: "Wawasan Open University(WOU)" },
  {
    value: "(LUCT)",
    label: "Limkokwing University of Creative Technology(LUCT)",
  },
  { value: "(MSU)", label: "Management and Science University(MSU)" },
  { value: "(AeU)", label: "Asia e University(AeU)" },
  { value: "(UCSI)", label: "UCSI University(UCSI)" },
  { value: "(QIU)", label: "Quest International University(QIU)" },
  { value: "(IIU)", label: "INTI International University(IIU)" },
  { value: "(TU)", label: "Taylor’s University(TU)" },
  { value: "(SU)", label: "Sunway University(SU)" },
  { value: "(MIU)", label: "Manipal International University(MIU)" },
  { value: "(PU)", label: "Perdana University(PU)" },
  { value: "(HU)", label: "HELP University(HU)" },
  { value: "(UIU)", label: "UNITAR International University(UIU)" },
  { value: "(RUI)", label: "Raffles University Iskandar(RUI)" },
  {
    value: "(MISI)",
    label: "Malaysia Institute of Supply Chain Innovation(MISI)",
  },
  { value: "(NU)", label: "Nilai University(NU)" },
  { value: "(SIU)", label: "SEGi University(SIU)" },
  {
    value: "(APU)",
    label: "Asia Pacific University of Technology and Innovation(APU)",
  },
];

const UniversityCounselorSignUp = () => {
  const navigate = useNavigate();
  const counsellor = JSON.parse(localStorage.getItem("University"));
  console.log(counsellor)
  const [uniCounsellorDetails, setUniCounsellorDetails] = useState({
    username: "",
    institution: "",
    currentPosition: "",
    contact: "",
    registrationNumber: "",
    email: counsellor?.email,
    password: counsellor?.password,
    role: counsellor?.role,
  });

  const singupHandler = () => {
    console.log("uniCounsellorDetails", uniCounsellorDetails);

    axios
      .post("https://talengen-server.onrender.com/api/v1/users/signup", uniCounsellorDetails)
      .then((response) => {
        console.log("POST request successful:", response);
        // navigate("/verifyemail");
        navigate(`/verifyemail?email=${uniCounsellorDetails.email}`);
      })
      .catch((error) => {
        console.error("Error making POST request:", error);
        console.log(error.response);
      });
  };
  const handleCategoryChange = (selectedOption) => {
    console.log(selectedOption);
    setUniCounsellorDetails((prevStudentDetails) => ({
      ...prevStudentDetails,
      institution: selectedOption.label,
    }));
  };
  return (
    <div className="main_wrapper">
      <div className="section-head text-center mt-3 mb-5">
        <Image src={TeleGenLogo} alt="logo" />
        <h2 className="fs-2 fw-semibold text-white mb-4">Sign In TalenGen</h2>

        <p className="fs-4 fw-semibold text-white">Join TalenGen Now</p>
      </div>

      <div className="student_alumni">
        <h2 className="fs-4 fw-bold text-white mb-2">University Counselors</h2>

        <div>
          <div className="sign-up p-2">
            <label htmlFor="preferredName" className="text-white">
              Enter your Preferred Name*
            </label>
            <div className="input_field mb-2">
              <input
                onBlur={(e) =>
                  setUniCounsellorDetails({
                    ...uniCounsellorDetails,
                    username: e.target.value,
                  })
                }
                id="preferredName"
                type="text"
                className="w-100 bg-transparent border-white"
              />
            </div>
            <div className="input_field mb-2">
              <label htmlFor="currentCompany" className=" fs-6 text-white">
                Enter your Current Institution Name*
              </label>
              {/* <div className='input_field mb-2'>
                                <input id='currentCompany' type="text" className='w-100 bg-transparent border-white' />
                            </div> */}
              <div className="input_field mb-2">
                <Select
                  //   onChange={handleCategoryChange}
                  onChange={(selectedOption) =>
                    handleCategoryChange(selectedOption)
                  }
                  placeholder="Select University"
                  options={options}
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

            <div className="input_field mb-2">
              <label htmlFor="currentPosition" className=" fs-6 text-white">
                Enter your Current Position*
              </label>
              <div className="input_field mb-2">
                <input
                  onBlur={(e) =>
                    setUniCounsellorDetails({
                      ...uniCounsellorDetails,
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
              <label htmlFor="preferredContact" className=" fs-6 text-white">
                Enter your Preferred Contact Number*
              </label>
              <div className="input_field mb-2">
                <input
                  onBlur={(e) =>
                    setUniCounsellorDetails({
                      ...uniCounsellorDetails,
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
              <label htmlFor="registrationNumber" className=" fs-6 text-white">
                Enter your Institution Registration Number*
              </label>
              <div className="input_field mb-2">
                <input
                  onBlur={(e) =>
                    setUniCounsellorDetails({
                      ...uniCounsellorDetails,
                      registrationNumber: e.target.value,
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
            <button onClick={singupHandler} className="commn-btn mb-4 mb-md-0">
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

export default UniversityCounselorSignUp;
