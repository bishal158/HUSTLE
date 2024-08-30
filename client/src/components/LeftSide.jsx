import { NavLink } from "react-router-dom";

import user from "../assets/hitman.jpg"


import { generalRoutes } from "../data/routes";
const LeftSide = () => {
  return (
    <>
      <section className="bi-page-left-wrapper">
        <div className="bi-common-menu-wrapper bi-general-menu-wrapper">
          <div className="bi-menu-name">General</div>
          <ul className="bi-menu-items">
            <NavLink to={'/profile'} className="bi-menu-item">
              <div className="bi-menu-item-link">
                <span className="bi-menu-icon">
                <img
                          src={user}
                          alt=""
                          srcSet=""
                        />
                </span>
               Mahfuj Ahmed 
              </div>
            </NavLink>
            {generalRoutes.map((route, index) => {
              return (
                <NavLink key={index} to={route.route} className="bi-menu-item">
                  <div className="bi-menu-item-link">
                    <span className="bi-menu-icon">
                      {route.icon}
                    </span>
                    {route.routeName}
                  </div>
                </NavLink>
              );
            })}
           
          </ul>
        </div>
        <div className="bi-common-menu-wrapper bi-other-menu-wrapper">
          <div className="bi-menu-name">Others</div>
          <ul className="bi-menu-items">
            <NavLink to={"/settings"} className="bi-menu-item">
              <div className="bi-menu-item-link">
                <span className="bi-menu-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_6205_167)">
                      <path
                        d="M29.2334 17.2503L28.7744 17.1911C27.6675 17.0483 26.8328 16.1062 26.8328 14.9998C26.8328 13.8934 27.6675 12.9513 28.7744 12.8085L29.2334 12.7493C29.7561 12.6819 30.1026 12.172 29.9726 11.6612L29.8585 11.2128C29.4977 9.7919 28.9339 8.43046 28.1844 7.1705L27.9479 6.77294C27.6785 6.32025 27.0733 6.20476 26.656 6.52661L26.2898 6.80927C25.8993 7.11056 25.4131 7.27649 24.9208 7.27649C24.334 7.27649 23.7821 7.04792 23.3671 6.6329C22.5847 5.85044 22.5088 4.59396 23.1907 3.7102L23.4733 3.34399C23.7951 2.92692 23.6798 2.32177 23.2271 2.05218L22.8295 1.81552C21.5696 1.06605 20.2081 0.5022 18.7872 0.141384L18.3387 0.0273608C17.8279 -0.102365 17.3181 0.243571 17.2507 0.766518L17.1914 1.22554C17.0486 2.33243 16.1066 3.16715 15.0001 3.16715C13.8937 3.16715 12.9516 2.33243 12.8089 1.22554L12.7496 0.766518C12.6822 0.243981 12.1726 -0.102482 11.6615 0.0273608L11.213 0.141384C9.79211 0.502251 8.43066 1.0661 7.17069 1.81552L6.77313 2.05218C6.3205 2.32159 6.20501 2.92686 6.52692 3.34405L6.80958 3.71026C7.49149 4.59396 7.41567 5.85039 6.63315 6.6329C6.21814 7.04792 5.6663 7.27643 5.07931 7.27649C4.58707 7.27649 4.10092 7.11061 3.71057 6.80933L3.3443 6.52667C2.92729 6.20482 2.32196 6.32013 2.05243 6.77288L1.81577 7.17044C1.0663 8.43039 0.502452 9.79184 0.141636 11.2127L0.0275549 11.6613C-0.102288 12.172 0.243941 12.6819 0.766712 12.7493L1.22573 12.8085C2.33245 12.9514 3.16717 13.8934 3.16717 14.9998C3.16717 16.1062 2.33245 17.0484 1.22562 17.1911L0.766595 17.2503C0.243999 17.3177 -0.102523 17.8275 0.0273791 18.3384L0.141461 18.7869C0.502323 20.2078 1.06617 21.5692 1.81559 22.8292L2.05225 23.2268C2.32167 23.6795 2.92706 23.7949 3.34418 23.473L3.71033 23.1904C4.1008 22.889 4.58695 22.7232 5.07925 22.7232C5.66618 22.7232 6.21796 22.9517 6.63298 23.3667C7.41544 24.1491 7.49131 25.4057 6.80946 26.2893L6.52681 26.6556C6.20495 27.0725 6.32021 27.6779 6.77302 27.9475L7.17063 28.1841C8.43056 28.9336 9.79199 29.4974 11.2129 29.8582L11.6614 29.9723C11.7329 29.9905 11.8056 29.9994 11.878 29.9994C12.3208 29.9994 12.6931 29.6702 12.7494 29.2331L12.8087 28.774C12.9514 27.6672 13.8935 26.8324 15 26.8324C16.1064 26.8324 17.0485 27.6671 17.1912 28.774L17.2505 29.2331C17.318 29.756 17.8277 30.102 18.3386 29.9723L18.787 29.8582C20.2079 29.4973 21.5694 28.9335 22.8295 28.1841L23.227 27.9474C23.6795 27.678 23.795 27.0728 23.4732 26.6557L23.1905 26.2893C22.5086 25.4057 22.5844 24.1493 23.3669 23.3667C23.7819 22.9517 24.3338 22.7232 24.9207 22.7232C25.413 22.7232 25.8991 22.889 26.2895 23.1904L26.6558 23.473C27.0729 23.7949 27.6782 23.6795 27.9477 23.2267L28.1843 22.8291C28.9337 21.5693 29.4975 20.2078 29.8583 18.787L29.9724 18.3384C30.1025 17.8278 29.7562 17.3177 29.2334 17.2503ZM15.0038 21.1469C11.6126 21.1469 8.85309 18.3873 8.85309 14.9962C8.85309 11.6051 11.6127 8.84551 15.0038 8.84551C18.3949 8.84551 21.1544 11.6051 21.1544 14.9962C21.1544 18.3873 18.3949 21.1469 15.0038 21.1469Z"
                        fill="#CAE8F9"
                      />
                      <path
                        d="M15.0037 8.84526C18.3948 8.84526 21.1544 11.6048 21.1544 14.9959C21.1544 18.387 18.3948 21.1467 15.0037 21.1467L15 21.1466V26.8324C16.1065 26.8324 17.0485 27.6671 17.1913 28.774L17.2505 29.2331C17.318 29.7559 17.8277 30.102 18.3386 29.9723L18.787 29.8582C20.208 29.4973 21.5695 28.9334 22.8295 28.1841L23.227 27.9474C23.6796 27.678 23.795 27.0728 23.4732 26.6556L23.1906 26.2893C22.5086 25.4057 22.5845 24.1493 23.3669 23.3667C23.7819 22.9516 24.3338 22.7231 24.9207 22.7231C25.413 22.7231 25.8992 22.889 26.2896 23.1904L26.6559 23.473C27.0729 23.7949 27.6782 23.6795 27.9478 23.2267L28.1843 22.8291C28.9338 21.5692 29.4976 20.2078 29.8583 18.7869L29.9725 18.3383C30.1024 17.8277 29.756 17.3176 29.2332 17.2503L28.7743 17.1911C27.6674 17.0483 26.8327 16.1062 26.8327 14.9998C26.8327 13.8934 27.6673 12.9513 28.7743 12.8085L29.2333 12.7493C29.756 12.6818 30.1024 12.172 29.9725 11.6612L29.8583 11.2128C29.4975 9.79189 28.9337 8.43044 28.1843 7.17048L27.9478 6.77292C27.6783 6.32023 27.0732 6.20474 26.6558 6.5266L26.2896 6.80925C25.8992 7.11054 25.413 7.27648 24.9206 7.27648C24.3338 7.27648 23.782 7.0479 23.3669 6.63289C22.5845 5.85043 22.5086 4.59395 23.1906 3.71018L23.4732 3.34397C23.7949 2.9269 23.6797 2.32175 23.227 2.05216L22.8294 1.8155C21.5694 1.06603 20.208 0.502184 18.7871 0.141368L18.3386 0.0273454C17.8277 -0.102381 17.318 0.243555 17.2505 0.766503L17.1913 1.22552C17.0485 2.33241 16.1064 3.16714 15 3.16714V8.84555C15.0012 8.84534 15.0025 8.84524 15.0037 8.84526Z"
                        fill="#B7E0F6"
                      />
                      <path
                        d="M15.0018 7.08789C10.6411 7.08789 7.09375 10.6352 7.09375 14.9959C7.09375 19.3566 10.6411 22.9039 15.0018 22.9039C19.3625 22.9039 22.9098 19.3566 22.9098 14.9959C22.9098 10.6352 19.3625 7.08789 15.0018 7.08789ZM15.0018 19.3893C12.5794 19.3893 10.6084 17.4183 10.6084 14.996C10.6084 12.5736 12.5794 10.6026 15.0018 10.6026C17.4241 10.6026 19.3951 12.5736 19.3951 14.996C19.3951 17.4183 17.4241 19.3893 15.0018 19.3893Z"
                        fill="#549CFF"
                      />
                      <path
                        d="M19.3933 14.9959C19.3933 17.4183 17.4224 19.3892 15 19.3892V22.9039C19.3607 22.9039 22.908 19.3566 22.908 14.9959C22.908 10.6352 19.3607 7.08789 15 7.08789V10.6026C17.4223 10.6026 19.3933 12.5735 19.3933 14.9959Z"
                        fill="#1689FC"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_6205_167">
                        <rect width="30" height="30" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                Settings
              </div>
            </NavLink>
            <li className="bi-menu-item">
              <a href="groups.html" className="bi-menu-item-link">
                <span className="bi-menu-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_6205_178)">
                      <path
                        d="M18.6641 17.3336C16.4588 17.3336 14.6641 15.5389 14.6641 13.3336C14.6641 11.1283 16.4588 9.33365 18.6641 9.33365H21.3305V4.00045C21.3305 1.79516 19.5359 0.000488281 17.3306 0.000488281H2.99748C2.55873 0.000488281 2.14811 0.216299 1.89886 0.577608C1.6508 0.938979 1.59493 1.39916 1.75211 1.80835L11.4188 27.1416C11.6148 27.6589 12.1106 28.0002 12.6641 28.0002H17.3306C19.5359 28.0002 21.3305 26.2055 21.3305 24.0003V17.3336H18.6641Z"
                        fill="#2196F3"
                      />
                      <path
                        d="M24.8254 19.8991C24.3281 19.6923 24.0026 19.2058 24.0026 18.667V14.667H18.6694C17.9334 14.667 17.3359 14.0698 17.3359 13.3338C17.3359 12.5977 17.9334 12.0005 18.6694 12.0005H24.0026V8.00056C24.0026 7.46176 24.3281 6.9752 24.8254 6.76839C25.0691 6.6675 25.3372 6.64115 25.5959 6.6927C25.8545 6.74424 26.0921 6.87135 26.2785 7.05795L31.6119 12.3911C32.1332 12.9124 32.1332 13.7551 31.6119 14.2764L26.2785 19.6098C26.092 19.7963 25.8545 19.9234 25.5958 19.9749C25.3371 20.0264 25.069 20 24.8254 19.8991Z"
                        fill="#607D8B"
                      />
                      <path
                        d="M11.528 2.80323L3.51603 0.132635C1.70798 -0.42336 0 0.911315 0 2.66717V26.6669C0 27.8071 0.725305 28.8244 1.80542 29.1977L9.81584 31.8683C10.1105 31.9589 10.3813 32.0004 10.6666 32.0004C12.1373 32.0004 13.3331 30.8043 13.3331 29.3337V5.3339C13.3331 4.19403 12.6078 3.17667 11.528 2.80317L11.528 2.80323Z"
                        fill="#64B5F6"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_6205_178">
                        <rect width="32" height="32" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </section>
      <div className="common-side-opener bi-left-side-opener">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M8.25 4.5L15.75 12L8.25 19.5"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </>
  );
};

export default LeftSide;
