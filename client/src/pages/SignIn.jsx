import signImage from "../assets/signInImg.png";
import logo from "../assets/logo.png";
import { AppleIcon, GoogleIcon } from "../data/Icon";
import { useForm } from "react-hook-form"; // Import React Hook Form
import { Link } from "react-router-dom";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Ensure this logs when the form is submitted
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
    return true; // Valid password
  };

  return (
    <section className="nr--signIn--wrapper">
      <div className="nr--signIn--main">
        <div className="nr--signIn--left">
          <div className="nr--signIn--left--image">
            <img src={signImage} alt="Not Found" />
          </div>
        </div>
        <div className="nr--signIn--right">
          <div className="nr--logo--signIn">
            <div className="nr--logo">
              <img src={logo} alt="Not Found" />
            </div>
          </div>
          <div className="nr--signIn--inputBox">
            <div className="nr--signIn--inputBox--heading">
              <h2 className="signIn--signUp--header">Get Started Now</h2>
              <p className="signIn--signUp--pera">
                Enter your credentials to access your account
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
                      Log in with Google
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
                      Log in with Apple
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
                <div className="nr--email--input--main">
                  <label htmlFor="email">
                    <span className="input--label--text">Email</span>
                  </label>
                  <div className="nr--email--input">
                    <input
                      type="email"
                      id="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value:
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                          message: "Enter valid email address",
                        },
                      })}
                    />
                  </div>
                  {errors.email && (
                    <span className="error__msg">{errors.email.message}</span>
                  )}
                </div>
                <div className="nr--email--input--main">
                  <label htmlFor="password">
                    <span className="input--label--text">Password</span>
                    <Link className="forgetPass" to="/forgot-password">
                      Forgot Password?
                    </Link>
                  </label>
                  <div className="nr--email--input">
                    <input
                      type="password"
                      id="password"
                      {...register("password", {
                        required: "Password is required",
                        validate: validatePassword,
                      })}
                    />
                  </div>
                  {errors.password && (
                    <span className="error__msg">
                      {errors.password.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="nr--sign--in--checkbox">
                <input
                  className="checkbox"
                  type="checkbox"
                  id="privacy"
                  {...register("privacy", {})}
                />
                <label htmlFor="privacy">
                  <span className="nr--LogIn--with--commonText">
                    I agree to the terms &amp; policy
                  </span>
                </label>
              </div>
              <div className="signIn--btn">
                <button type="submit" className="loginSubmit--btn">
                  Sign In
                </button>
              </div>
            </form>
            <div className="nr--dont--account">
              <Link className="nr--dont--account--text" to="/signup">
                Don’t have an account? <span>Sign Up</span>
              </Link>
            </div>
            <div className="nr--right--and--reserve">
              <span className="nr--right--reserve">
                @2024 UsTLE, All rights reserved
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
