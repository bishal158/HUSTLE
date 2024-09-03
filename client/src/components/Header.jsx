import logo from "../assets/logo.png";
import user from "../assets/hitman.jpg";
import { Link, NavLink } from "react-router-dom";
import Notification from "../features/notification/Notification";
import { useState } from "react";
const Header = () => {
  const [showNotifications , setShowNotifications] = useState(false)
  return (
    <>
      {/* Notification */}
      <Notification showNotifications={showNotifications}/>
      <header className="page-top-header">
        <div className="bi-header--left">
          <Link to={"/"} className="bi-header-logo">
            <img src={logo} alt="" srcSet="" />
          </Link>
          <div className="bi-search-wrapper">
            <form action="" className="search-form">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
              >
                <circle
                  cx="9.76981"
                  cy="9.76663"
                  r="8.98856"
                  stroke="#B3BAC5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.0234 16.4851L19.5475 20"
                  stroke="#B3BAC5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <input type="text" placeholder="Search Here" />
            </form>
          </div>
        </div>

        <div className="bi-header--right">
          <NavLink to={"/"} className="bi-header-icon-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clipPath="url(#clip0_6044_3267)">
                <path
                  d="M23.3529 10.4388L23.3513 10.4372L13.5612 0.647484C13.1439 0.229922 12.589 0 11.9989 0C11.4088 0 10.854 0.229781 10.4365 0.647297L0.651482 10.432C0.648201 10.4353 0.64492 10.4388 0.641639 10.4421C-0.21533 11.304 -0.21383 12.7023 0.645857 13.562C1.03858 13.955 1.55734 14.1825 2.11197 14.2064C2.13447 14.2086 2.1572 14.2096 2.18008 14.2096H2.57026V21.4143C2.57026 22.84 3.73023 24 5.15626 24H8.98642C9.37464 24 9.68954 23.6852 9.68954 23.2969V17.6484C9.68954 16.9979 10.2188 16.4687 10.8693 16.4687H13.1285C13.7791 16.4687 14.3082 16.9979 14.3082 17.6484V23.2969C14.3082 23.6852 14.623 24 15.0114 24H18.8416C20.2676 24 21.4276 22.84 21.4276 21.4144V14.2097H21.7894C22.3794 14.2097 22.9342 13.9799 23.3518 13.5624C24.2125 12.7013 24.2128 11.3005 23.3529 10.4388Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_6044_3267">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </NavLink>
          <NavLink to={"/message"} className="bi-header-icon-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.10813 15.928C0.69113 12.018 2.65513 7.201 4.92813 4.928C8.83213 1.024 15.1641 1.024 19.0691 4.928C22.9741 8.834 22.9741 15.166 19.0691 19.071C16.7011 21.439 11.9711 23.316 8.07013 20.891C7.85413 20.757 7.74613 20.69 7.66313 20.657C7.52259 20.597 7.36915 20.5737 7.21713 20.589C7.08572 20.6069 6.95597 20.6353 6.82913 20.674C5.57113 20.999 4.94213 21.163 4.48913 21.07C4.10459 20.9918 3.75155 20.8022 3.47399 20.5248C3.19642 20.2474 3.00659 19.8945 2.92813 19.51C2.83613 19.056 2.99813 18.427 3.32513 17.17C3.37613 16.97 3.40213 16.87 3.40913 16.782C3.42497 16.6301 3.40191 16.4766 3.34213 16.336C3.30913 16.254 3.24213 16.146 3.10813 15.928ZM16.1401 9.108C16.339 9.108 16.5298 9.18702 16.6705 9.32767C16.8111 9.46832 16.8901 9.65909 16.8901 9.858C16.8901 10.0569 16.8111 10.2477 16.6705 10.3883C16.5298 10.529 16.339 10.608 16.1401 10.608H8.14013C7.94122 10.608 7.75045 10.529 7.6098 10.3883C7.46915 10.2477 7.39013 10.0569 7.39013 9.858C7.39013 9.65909 7.46915 9.46832 7.6098 9.32767C7.75045 9.18702 7.94122 9.108 8.14013 9.108H16.1401ZM16.1401 13.108C16.339 13.108 16.5298 13.187 16.6705 13.3277C16.8111 13.4683 16.8901 13.6591 16.8901 13.858C16.8901 14.0569 16.8111 14.2477 16.6705 14.3883C16.5298 14.529 16.339 14.608 16.1401 14.608H8.14013C7.94122 14.608 7.75045 14.529 7.6098 14.3883C7.46915 14.2477 7.39013 14.0569 7.39013 13.858C7.39013 13.6591 7.46915 13.4683 7.6098 13.3277C7.75045 13.187 7.94122 13.108 8.14013 13.108H16.1401Z"
                fill="white"
              />
            </svg>
          </NavLink>
          <button className="bi-header-icon-btn" id="open-notification-window" onClick={()=>setShowNotifications(!showNotifications)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M20.6286 15.9989C20.5508 15.9052 20.4744 15.8114 20.3994 15.7209C19.3682 14.4736 18.7443 13.7208 18.7443 10.1897C18.7443 8.36156 18.3069 6.86156 17.4449 5.73656C16.8093 4.90547 15.95 4.275 14.8175 3.80906C14.803 3.80096 14.79 3.79032 14.7791 3.77766C14.3718 2.41359 13.2571 1.5 11.9999 1.5C10.7427 1.5 9.62849 2.41359 9.22114 3.77625C9.21027 3.78845 9.19744 3.79875 9.18318 3.80672C6.54036 4.89469 5.25599 6.98203 5.25599 10.1883C5.25599 13.7208 4.63302 14.4736 3.60083 15.7195C3.52583 15.81 3.44943 15.9019 3.37161 15.9975C3.17061 16.2399 3.04326 16.5348 3.00464 16.8473C2.96601 17.1598 3.01772 17.4769 3.15365 17.7609C3.44286 18.3703 4.05927 18.7486 4.76286 18.7486H19.2421C19.9424 18.7486 20.5546 18.3708 20.8447 17.7642C20.9813 17.4801 21.0335 17.1628 20.9952 16.8499C20.9569 16.537 20.8297 16.2417 20.6286 15.9989ZM11.9999 22.5C12.6773 22.4995 13.3418 22.3156 13.9232 21.9679C14.5045 21.6202 14.9809 21.1217 15.3018 20.5252C15.3169 20.4966 15.3244 20.4646 15.3234 20.4322C15.3225 20.3999 15.3133 20.3684 15.2966 20.3407C15.2799 20.313 15.2563 20.2901 15.2281 20.2742C15.2 20.2583 15.1682 20.25 15.1358 20.25H8.86489C8.83252 20.2499 8.80066 20.2582 8.77243 20.274C8.7442 20.2899 8.72055 20.3128 8.7038 20.3405C8.68704 20.3682 8.67774 20.3997 8.67681 20.4321C8.67588 20.4645 8.68335 20.4965 8.69849 20.5252C9.01936 21.1216 9.49567 21.6201 10.0769 21.9678C10.6581 22.3155 11.3226 22.4994 11.9999 22.5Z"
                fill="white"
              />
            </svg>
          </button>
          <Link to={'/profile'} className="bi-user-img">
            <img src={user} alt="" srcSet="" />
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill="none"
              >
                <rect width="14" height="13" rx="6.5" fill="#06151D" />
                <path
                  d="M11 5L8.69705 7.30295C7.99 8.01 7.63647 8.36353 7.20858 8.4313C7.07039 8.45319 6.92961 8.45319 6.79142 8.4313C6.36353 8.36353 6.01 8.01 5.30294 7.30294L3 5"
                  stroke="#B4B2B1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
