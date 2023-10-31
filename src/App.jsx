import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import { Provider } from 'react-redux';
// import { store } from './store/store';

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignUp from "./component/signUp/SignUp";
import SignIn from "./component/signIn/SignIn";
import ResetPassword from "./component/resetPassword/ResetPassword";
import StudentSignup from "./component/studentSignup/StudentSignup";
import EmployesSignup from "./component/emplyesSignup/EmployesSignup";
import VerifyEmail from "./component/verifyEmail/VerifyEmail";
import VerifySuccess from "./component/verifySuccess/VerifySuccess";
import UniversityCounselorSignUp from "./component/universityCounselorSignUp/UniversityCounselorSignUp";
import ResetPasswordVIew from "./component/resetPassword/ResetPasswordVIew";
import VeryfyResetEmail from "./component/verifyEmail/VeryfyResetEmail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUp />,
  },

  {
    path: "/signin",
    element: <SignIn />,
  },

  {
    path: "/resetpassword",
    element: <ResetPassword />,
  },
  {
    path: "/reset",
    element: <ResetPasswordVIew />,
  },

  {
    path: "/studentsignup",
    element: <StudentSignup />,
  },

  {
    path: "/employesignup",
    element: <EmployesSignup />,
  },
  {
    path: "/universitycounselorsignup",
    element: <UniversityCounselorSignUp />,
  },

  {
    path: "/verifyemail",
    element: <VerifyEmail />,
  },
  {
    path: "/verifyResetEmail",
    element: <VeryfyResetEmail />,
  },

  {
    path: "/verifysuccess",
    element: <VerifySuccess />,
  },
]);

function App() {
  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
