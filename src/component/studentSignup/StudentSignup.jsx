import TeleGenLogo from "../../assets/telegen_logo.svg";
import { useNavigate } from "react-router-dom";
import { Image } from "react-bootstrap";
import Select from "react-select";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import serverLink from "../../../config";

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

const options2 = [
  { value: "2022", label: "2022" },
  { value: "2023", label: "2023" },
  { value: "2024", label: "2024" },
  { value: "2025", label: "2025" },
  { value: "2026", label: "2026" },
  { value: "2027", label: "2027" },
  { value: "2028", label: "2028" },
  { value: "2029", label: "2029" },
  { value: "2030", label: "2030" },
  { value: "2031", label: "2031" },
  { value: "2032", label: "2032" },
  { value: "2033", label: "2033" },
  { value: "2034", label: "2034" },
  { value: "2035", label: "2035" },
  { value: "2036", label: "2036" },
  { value: "2037", label: "2037" },
  { value: "2038", label: "2038" },
  { value: "2039", label: "2039" },
  { value: "2040", label: "2040" },
  { value: "2041", label: "2041" },
  { value: "2042", label: "2042" },
  { value: "2043", label: "2043" },
  { value: "2044", label: "2044" },
  { value: "2045", label: "2045" },
  { value: "2046", label: "2046" },
  { value: "2047", label: "2047" },
  { value: "2048", label: "2048" },
  { value: "2049", label: "2049" },
  { value: "2050", label: "2050" },
  { value: "2051", label: "2051" },
  { value: "2052", label: "2052" },
  { value: "2053", label: "2053" },
  { value: "2054", label: "2054" },
  { value: "2055", label: "2055" },
  { value: "2056", label: "2056" },
  { value: "2057", label: "2057" },
  { value: "2058", label: "2058" },
  { value: "2059", label: "2059" },
  { value: "2060", label: "2060" },
];

const StudentSignup = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const [studentDetails, setStudentDetails] = useState({
    username: "",
    password: "",
    institude: "",
    graduation: "",
    role: "Student",
    email: localStorage.getItem("student"),
  });
  const url = serverLink;
  const singupHandler = (e) => {
    e.preventDefault();
    setIsButtonDisabled(true);
    axios
      .post(`${url}/api/v1/users/signup`, studentDetails)
      .then((response) => {
        console.log("POST request successful:", response);
        // Swal.fire("Verify Your Email Address");
        navigate(`/verifyemail?email=${studentDetails.email}&signup=true`);
      })
      .catch((error) => {
        console.error("Error making POST request:", error);
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

  const handleCategoryChange = (selectedOption, selectName) => {
    if (selectName === "institutionSelect") {
      setStudentDetails((prevStudentDetails) => ({
        ...prevStudentDetails,
        institude: selectedOption.label,
      }));
    } else if (selectName === "graduationSelect") {
      setStudentDetails((prevStudentDetails) => ({
        ...prevStudentDetails,
        graduation: selectedOption.value,
      }));
    }
    setSelectedComponent(null);
  };

  return (
    <div className="main_wrapper">
      <div className="section-head text-center mt-3 mb-5">
        <Image src={TeleGenLogo} alt="logo" />
        <h2 className="fs-2 fw-semibold text-white mb-4">Sign In TalenGen</h2>

        <p className="fs-4 fw-semibold text-white">Join TalenGen Now</p>
      </div>

      <div className="student_alumni">
        <h2 className="fs-4 fw-bold text-white mb-2">Students & Alumni</h2>

        <form onSubmit={(e) => singupHandler(e)}>
          <div className="sign-up p-2">
            <label htmlFor="signup" className="text-white">
              Enter your Preferred Name*
            </label>
            <div className="input_field mb-2">
              <input
                required
                onChange={(e) =>
                  setStudentDetails({
                    ...studentDetails,
                    username: e.target.value,
                  })
                }
                type="text"
                className="w-100 bg-transparent border-white"
              />
            </div>
            <div className="input_field mb-2">
              <label htmlFor="signup" className=" fs-6 text-white">
                Enter Password*
              </label>
              <div className="input_field mb-2">
                <input
                  required
                  onChange={(e) =>
                    setStudentDetails({
                      ...studentDetails,
                      password: e.target.value,
                    })
                  }
                  type="password"
                  className="w-100 bg-transparent border-white"
                />
              </div>
            </div>

            <div className="input_field mb-2">
              <label htmlFor="signup" className=" fs-6 text-white">
                Confirm Password*
              </label>
              <div className="input_field mb-2">
                <input
                  required
                  onChange={(e) =>
                    setStudentDetails({
                      ...studentDetails,
                      password: e.target.value,
                    })
                  }
                  type="password"
                  className="w-100 bg-transparent border-white"
                />
              </div>
            </div>

            <div className="input_field mb-2">
              <label htmlFor="signup" className=" fs-6 text-white">
                Current/Past Institution*
              </label>
              <div className="input_field mb-2">
                <Select
                  required
                  //   onChange={handleCategoryChange}
                  onChange={(selectedOption) =>
                    handleCategoryChange(selectedOption, "institutionSelect")
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
              <label htmlFor="signup" className=" fs-6 text-white">
                Graduation Class*
              </label>
              <div className="input_field mb-2">
                <Select
                  required
                  onChange={(selectedOption) =>
                    handleCategoryChange(selectedOption, "graduationSelect")
                  }
                  placeholder="Select Graduation Year"
                  options={options2}
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
          </div>

          <div className="sign-up d-flex flex-wrap align-items-center justify-content-between pb-4 mb-4">
            <button
              disabled={isButtonDisabled}
              type="submit"
              className="commn-btn mb-4 mb-md-0"
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

export default StudentSignup;
