import { AppleIcon, GoogleIcon } from "../data/Icon";
import { Link } from "react-router-dom";
import signImage from "../assets/signInImg.png";
import logo from "../assets/logo.png";
import { useForm } from "react-hook-form";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  // onsubmit
  const onSubmit = (data) => {
    console.log("Form Submitted", data);
    toast(
      <div className="toast-success">
        <FontAwesomeIcon icon="fa-solid fa-circle-check success-icon" />
        <span>Successfully Registered</span>
      </div>,
      {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      }
    );
  };

  // Custom Validation for Password
  const validatePassword = (password) => {
    if (password.length < 8) {
      return "Password must be at least 8 characters long";
    }
    if (password.length > 16) {
      return "Password cannot be longer than 16 characters";
    }
    if (!/[A-Z]/.test(password)) {
      return "Password must contain at least one uppercase letter";
    }
    if (!/[a-z]/.test(password)) {
      return "Password must contain at least one lowercase letter";
    }
    if (!/\d/.test(password)) {
      return "Password must contain at least one number";
    }
    if (!/[@$!%*?&]/.test(password)) {
      return "Password must contain at least one special character";
    }
    return true; 
  };
  return (
    <>
      <section className="nr--signIn--wrapper">
        <div className="nr--signIn--main">
          <div className="nr--signIn--left">
            <div className="nr--signIn--left--image">
              <img src={signImage} alt="not found" />
            </div>
          </div>
          <div className="nr--signIn--right">
            <div className="nr--logo--signIn">
              {/* common logo hare */}
              <div className="nr--logo">
                <img src={logo} alt="not found" />
              </div>
              {/* common logo hare */}
            </div>
            <div className="nr--signIn--inputBox">
              <div className="nr--signIn--inputBox--heading">
                <h2 className="signIn--signUp--header">Get Started Now</h2>
                <p className="signIn--signUp--pera">
                  Enter your credential to access your account
                </p>
              </div>
              <div className="nr--logIn--with--wrapper">
                <div className="log--in--with--google">
                  <div className="nr--login--And--text">
                    <div className="log--in--with--google--svg">
                      <GoogleIcon />
                    </div>
                    <div className="log--in--with--google--text">
                      <h5 className="nr--LogIn--with--commonText">
                        Log in With google
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="log--in--with--google">
                  <div className="nr--login--And--text">
                    <div className="log--in--with--google--svg">
                      <AppleIcon />
                    </div>
                    <div className="log--in--with--google--text">
                      <h5 className="nr--LogIn--with--commonText">
                        Log in With Apple
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="nr--or">
                <span className="nr--LogIn--with--commonText">Or</span>
              </div>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="nr--email--and--password--wrapper">
                  {/* full name */}
                  <div className="nr--email--input--main">
                    <label htmlFor="name">
                      <span className="input--lebel--text">Full Name</span>
                    </label>
                    <div className="nr--email--input">
                      <input
                        type="text"
                        id="name"
                        name="fullName"
                        {...register("fullName", {
                          required: "This field is required",
                          minLength: {
                            value: 6,
                            message: "Name must be at least 6 characters",
                          },
                          maxLength: {
                            value: 20,
                            message: "Name maximum 20 characters",
                          },
                        })}
                      />
                    </div>
                    {/* error */}
                    {errors.fullName && (
                      <span className="error__msg">
                        {errors.fullName.message}
                      </span>
                    )}
                  </div>
                  {/* email */}
                  <div className="nr--email--input--main">
                    <label htmlFor="email">
                      <span className="input--lebel--text">Email</span>
                    </label>
                    <div className="nr--email--input">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        {...register("email", {
                          required: "Email is required",
                        })}
                      />
                    </div>
                    {/* error */}
                    {errors.email && (
                      <span className="error__msg">{errors.email.message}</span>
                    )}
                  </div>
                  {/* password */}
                  <div className="nr--email--input--main">
                    <label htmlFor="password">
                      <span className="input--lebel--text">Password</span>
                    </label>
                    <div className="nr--email--input">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        {...register("password", {
                          required: "Password is required",
                          validate: validatePassword,
                        })}
                      />
                      <div className="forget--pass--icon"></div>
                    </div>
                    {/* error */}
                    {errors.password && (
                      <span className="error__msg">
                        {errors.password.message}
                      </span>
                    )}
                  </div>
                  {/* confirm password */}
                  <div className="nr--email--input--main">
                    <label htmlFor="confirmPassword">
                      <span className="input--lebel--text">
                        Confirm password
                      </span>
                    </label>
                    <div className="nr--email--input">
                      <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        {...register("confirmPassword", {
                          required: "Confirm Password is required",
                          validate: (value) =>
                            value === watch("password") ||
                            "Passwords do not match",
                        })}
                      />
                      <div className="forget--pass--icon"></div>
                    </div>
                    {/* error */}
                    {errors.confirmPassword && (
                      <span className="error__msg">
                        {errors.confirmPassword.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="nr--sign--in--checkbox">
                  <input
                    className="checkbox"
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    {...register("privacy", {})}
                  />
                  <label htmlFor="privacy">
                    <span className="nr--LogIn--with--commonText">
                      I have agree to the terms &amp; policy
                    </span>
                  </label>
                </div>
                <div className="signIn--btn">
                  <button type="submit" className="loginSubmit--btn">
                    Sign Up
                  </button>
                </div>
              </form>
              {/* link */}
              <div className="nr--dont--account">
                <Link to={"/"} className="nr--dont--account--text">
                  Have an account! <span>Sign In</span>
                </Link>
              </div>
              {/* copyright */}
              <div className="nr--right--and--reserve">
                <span className="nr--right--reserve">
                  @2024 UsTLE, All right Reserved
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default SignUp;
