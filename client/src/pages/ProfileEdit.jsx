import cover from '../assets/nr--profileCover.png'
import user from '../assets/hitman.jpg'
import LeftSide from '../components/LeftSide'
const ProfileEdit = () => {
  return (
    <>
    <div className="bi-left--sidebar--wrapper">
        <LeftSide />
      </div>
     <div className="bi-page-center-wrapper profile-edit-page">
          <div className="bi-profile-edit-page-container">
            <div className="bi-profile-edit-banner">
              <div className="bi-banner-images">
                <img
                  src={cover}
                  alt=""
                  srcSet=""
                />
              </div>
              <div className="bi-banner-user-info">
                <div className="bi-profile-image" data-bs-toggle="modal" data-bs-target="#crop_image_modal">
                  <img
                    src={user}
                    alt=""
                    srcSet=""
                    id="profile-image"
                  />
                  <div className="overlay">
                    <span className="overlay-text">Crop</span>
                  </div>
                </div>
                <h2 className="bi-profile-user-name">Azunyan U. Wu</h2>
                <p className="bi-user-email">elementary221b@gmail.com</p>
              </div>
            </div>

            <div className="bi-profile-edit-content">
              <form className="bi-profile-edit-common-section">
                <div className="bi-common-section-left">
                  <h3 className="bi-edit-section-title">Personal Info</h3>
                  <p className="bi-edit-section-des">
                    You can change your personal information settings here.
                  </p>
                </div>
                <div className="bi-common-section-right">
                
                  <div className="profile-edit-input-field-wrapper">
                    <div className="profile-edit-input-field-inner-wrapper">
                      <label htmlFor="fullName" className="bi-profile-edit-common-label"
                        >Full Name</label
                      >
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        className="bi-common-input-field"
                        placeholder="Azusa Nakano"
                      />
                    </div>
                    <div className="profile-edit-input-field-inner-wrapper">
                      <label
                        htmlFor="nick-name"
                        className="bi-profile-edit-common-label"
                        >Nick Name</label
                      >
                      <input
                        type="text"
                        id="nick-name"
                        name="nick-name"
                        className="bi-common-input-field"
                        placeholder="Ehabel"
                      />
                    </div>
                  </div>
                  
                  <div className="profile-edit-input-field-wrapper">
                    <div className="profile-edit-input-field-inner-wrapper">
                      <label htmlFor="email" className="bi-profile-edit-common-label"
                        >Email</label
                      >
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="bi-common-input-field"
                        placeholder="elementary221b@gmail.com"
                      />
                    </div>
                  </div>
                 
                  <div className="profile-edit-input-field-wrapper">
                    <div className="profile-edit-input-field-inner-wrapper">
                      <label htmlFor="phone" className="bi-profile-edit-common-label"
                        >Phone Number</label
                      >
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="bi-common-input-field"
                      />
                    </div>
                    <div className="profile-edit-input-field-inner-wrapper">
                      <label htmlFor="country" className="bi-profile-edit-common-label"
                        >Country</label
                      >
                      <select
                        name="country"
                        id="country"
                        className="bi-common-input-field"
                      >
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="India">India</option>
                        <option value="Australia">Australia</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="United States">United States</option>
                      </select>
                    </div>
                  </div>

              
                  <div className="profile-edit-input-field-wrapper">
                    <div className="profile-edit-input-field-inner-wrapper">
                      <label htmlFor="language" className="bi-profile-edit-common-label"
                        >Language</label
                      >
                      <select
                        name="language"
                        id="language"
                        className="bi-common-input-field"
                      >
                        <option value="English">English</option>
                        <option value="India">India</option>
                        <option value="Australia">Australia</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="United States">United States</option>
                      </select>
                    </div>
                    <div className="profile-edit-input-field-inner-wrapper dob">
                      <label htmlFor="dob" className="bi-profile-edit-common-label"
                        >DoB</label
                      >
                      <input
                        type="text"
                        id="dob"
                        name="dob"
                        className="bi-common-input-field"
                        placeholder="Azusa Nakano"
                      />
                      <label htmlFor="dob" className="dob-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                        >
                          <path
                            d="M8.5 2V5"
                            stroke="#C6C6C6"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.5 2V5"
                            stroke="#C6C6C6"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M4 9.08984H21"
                            stroke="#C6C6C6"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M21.5 8.5V17C21.5 20 20 22 16.5 22H8.5C5 22 3.5 20 3.5 17V8.5C3.5 5.5 5 3.5 8.5 3.5H16.5C20 3.5 21.5 5.5 21.5 8.5Z"
                            stroke="#C6C6C6"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12.4945 13.7002H12.5035"
                            stroke="#C6C6C6"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8.79138 13.7002H8.80036"
                            stroke="#C6C6C6"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8.79138 16.7002H8.80036"
                            stroke="#C6C6C6"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </label>
                    </div>
                  </div>

           
                  <div className="profile-edit-image-field-wrapper">
                    <h1 className="bi-profile-edit-common-label">Change Avatar</h1>
                    <div className="profile-edit-image-field-inner-wrapper">
                      <div className="image" id="avater-image">
                        <img
                          src={user}
                          alt=""
                          srcSet=""
                        />
                      </div>
                      <label htmlFor="avatar" className="avatar-upload-area">
                        <span className="upload-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="24"
                            viewBox="0 0 25 24"
                            fill="none"
                          >
                            <path
                              d="M9.5 17V11L7.5 13"
                              stroke="#141414"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M9.5 11L11.5 13"
                              stroke="#141414"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M22.5 10V15C22.5 20 20.5 22 15.5 22H9.5C4.5 22 2.5 20 2.5 15V9C2.5 4 4.5 2 9.5 2H14.5"
                              stroke="#141414"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M22.5 10H18.5C15.5 10 14.5 9 14.5 6V2L22.5 10Z"
                              stroke="#141414"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        <h5 className="image-text">
                          <b>Click here</b> to upload your file or drag.
                        </h5>
                        <h5 className="image-text">
                          Supported Format: SVG, JPG, PNG (10mb each)
                        </h5>
                      </label>
                      <input
                        type="file"
                        id="avatar"
                        name="avatar"
                        accept="image/*"
                      />
                    </div>
                  </div>
                  <div className="profile-edit-btn-section">
                    <button
                      type="reset"
                      className="bi-profile-edit-common-btn cancel"
                    >
                      Cancel
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                      >
                        <path
                          d="M16.7907 14.9615C16.9668 15.1376 17.0658 15.3765 17.0658 15.6256C17.0658 15.8746 16.9668 16.1135 16.7907 16.2896C16.6146 16.4657 16.3757 16.5647 16.1266 16.5647C15.8776 16.5647 15.6387 16.4657 15.4626 16.2896L10.5024 11.3279L5.54069 16.2881C5.36457 16.4642 5.1257 16.5631 4.87663 16.5631C4.62755 16.5631 4.38868 16.4642 4.21256 16.2881C4.03644 16.1119 3.9375 15.8731 3.9375 15.624C3.9375 15.3749 4.03644 15.136 4.21256 14.9599L9.17428 9.99977L4.21413 5.03805C4.03801 4.86193 3.93906 4.62306 3.93906 4.37399C3.93906 4.12492 4.03801 3.88605 4.21413 3.70993C4.39025 3.53381 4.62912 3.43486 4.87819 3.43486C5.12726 3.43486 5.36613 3.53381 5.54225 3.70993L10.5024 8.67165L15.4641 3.70915C15.6402 3.53303 15.8791 3.43408 16.1282 3.43408C16.3773 3.43408 16.6161 3.53303 16.7922 3.70915C16.9684 3.88527 17.0673 4.12414 17.0673 4.37321C17.0673 4.62228 16.9684 4.86115 16.7922 5.03727L11.8305 9.99977L16.7907 14.9615Z"
                          fill="#C5C5C6"
                        />
                      </svg>
                    </button>
                    <button
                      type="reset"
                      className="bi-profile-edit-common-btn submit"
                    >
                      Save
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                      >
                        <path
                          d="M18.6657 6.28815L8.66569 16.2882C8.57859 16.3756 8.4751 16.4449 8.36114 16.4922C8.24719 16.5395 8.12501 16.5639 8.00163 16.5639C7.87824 16.5639 7.75606 16.5395 7.64211 16.4922C7.52815 16.4449 7.42466 16.3756 7.33756 16.2882L2.96256 11.9132C2.87536 11.8259 2.80618 11.7224 2.75899 11.6085C2.71179 11.4945 2.6875 11.3724 2.6875 11.2491C2.6875 11.1258 2.71179 11.0036 2.75899 10.8897C2.80618 10.7758 2.87536 10.6722 2.96256 10.585C3.04977 10.4978 3.1533 10.4286 3.26724 10.3814C3.38118 10.3343 3.5033 10.31 3.62663 10.31C3.74995 10.31 3.87207 10.3343 3.98601 10.3814C4.09995 10.4286 4.20348 10.4978 4.29069 10.585L8.00241 14.2967L17.3391 4.96159C17.5152 4.78547 17.7541 4.68652 18.0032 4.68652C18.2523 4.68652 18.4911 4.78547 18.6673 4.96159C18.8434 5.13771 18.9423 5.37658 18.9423 5.62565C18.9423 5.87472 18.8434 6.11359 18.6673 6.28971L18.6657 6.28815Z"
                          fill="#141414"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </form>
              <form className="bi-profile-edit-common-section">
                <div className="bi-common-section-left">
                  <h3 className="bi-edit-section-title">Change password</h3>
                  <p className="bi-edit-section-des">
                    You can change your Password settings here.
                  </p>
                </div>
                <div className="bi-common-section-right">
                  <div className="bi-profile-edit-radio-field-wrapper">
                    <div className="bi-profile-edit-radio-feild-left">
                      <label className="switch" htmlFor="enable-auto-log">
                        <input
                          type="checkbox"
                          name="switch-mode"
                          id="enable-auto-log"
                        />
                        <span className="slider round"></span>
                      </label>
                    </div>
                    <div className="bi-profile-edit-radio-feild-right">
                      <h5 className="bi-profile-edit-radio-feild-title">
                        Enable Auto log in other device
                      </h5>
                      <p className="bi-profile-edit-radio-feild-subtitle">
                        Auto login at the save time in deferent device.
                      </p>
                    </div>
                  </div>

                  <div className="bi-profile-edit-radio-field-wrapper">
                    <div className="bi-profile-edit-radio-feild-left">
                      <label className="switch" htmlFor="notify-other-device">
                        <input
                          type="checkbox"
                          name="switch-mode"
                          id="notify-other-device"
                        />
                        <span className="slider round"></span>
                      </label>
                    </div>
                    <div className="bi-profile-edit-radio-feild-right">
                      <h5 className="bi-profile-edit-radio-feild-title">
                        Notify other device login
                      </h5>
                      <p className="bi-profile-edit-radio-feild-subtitle">
                        You will be notified when a unknown login has been made.
                      </p>
                    </div>
                  </div>

                  <div className="bi-profile-edit-password-field-wrapper">
                    <label
                      htmlFor="current_password"
                      className="bi-profile-edit-common-label"
                    >
                      Current Password
                    </label>
                    <input
                      type="password"
                      id="current_password"
                      name="current_password"
                      className="bi-common-input-field"
                      placeholder="Current Password"
                    />
                    <span className="eye-icon-btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                      >
                        <path
                          d="M15.0319 9.46992L9.97188 14.5299C9.32188 13.8799 8.92188 12.9899 8.92188 11.9999C8.92188 10.0199 10.5219 8.41992 12.5019 8.41992C13.4919 8.41992 14.3819 8.81992 15.0319 9.46992Z"
                          stroke="#C6C6C6"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M18.3237 5.76998C16.5737 4.44998 14.5737 3.72998 12.5037 3.72998C8.97375 3.72998 5.68375 5.80998 3.39375 9.40998C2.49375 10.82 2.49375 13.19 3.39375 14.6C4.18375 15.84 5.10375 16.91 6.10375 17.77"
                          stroke="#C6C6C6"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8.92188 19.5302C10.0619 20.0102 11.2719 20.2702 12.5019 20.2702C16.0319 20.2702 19.3219 18.1902 21.6119 14.5902C22.5119 13.1802 22.5119 10.8102 21.6119 9.40018C21.2819 8.88018 20.9219 8.39018 20.5519 7.93018"
                          stroke="#C6C6C6"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16.0075 12.7002C15.7475 14.1102 14.5975 15.2602 13.1875 15.5202"
                          stroke="#C6C6C6"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9.97 14.5298L2.5 21.9998"
                          stroke="#C6C6C6"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M22.5013 2L15.0312 9.47"
                          stroke="#C6C6C6"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>

                  <div className="bi-profile-edit-password-field-wrapper">
                    <label
                      htmlFor="new_password"
                      className="bi-profile-edit-common-label"
                    >
                      New Password
                    </label>
                    <input
                      type="password"
                      id="new_password"
                      name="new_password"
                      className="bi-common-input-field"
                      placeholder="New Password"
                    />
                    <span className="eye-icon-btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                      >
                        <path
                          d="M15.0319 9.46992L9.97188 14.5299C9.32188 13.8799 8.92188 12.9899 8.92188 11.9999C8.92188 10.0199 10.5219 8.41992 12.5019 8.41992C13.4919 8.41992 14.3819 8.81992 15.0319 9.46992Z"
                          stroke="#C6C6C6"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M18.3237 5.76998C16.5737 4.44998 14.5737 3.72998 12.5037 3.72998C8.97375 3.72998 5.68375 5.80998 3.39375 9.40998C2.49375 10.82 2.49375 13.19 3.39375 14.6C4.18375 15.84 5.10375 16.91 6.10375 17.77"
                          stroke="#C6C6C6"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8.92188 19.5302C10.0619 20.0102 11.2719 20.2702 12.5019 20.2702C16.0319 20.2702 19.3219 18.1902 21.6119 14.5902C22.5119 13.1802 22.5119 10.8102 21.6119 9.40018C21.2819 8.88018 20.9219 8.39018 20.5519 7.93018"
                          stroke="#C6C6C6"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16.0075 12.7002C15.7475 14.1102 14.5975 15.2602 13.1875 15.5202"
                          stroke="#C6C6C6"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9.97 14.5298L2.5 21.9998"
                          stroke="#C6C6C6"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M22.5013 2L15.0312 9.47"
                          stroke="#C6C6C6"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>

                  <div className="bi-profile-edit-password-field-wrapper">
                    <label
                      htmlFor="confirm_password"
                      className="bi-profile-edit-common-label"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="confirm_password"
                      name="confirm_password"
                      className="bi-common-input-field"
                      placeholder="Confirm Password"
                    />
                    <span className="eye-icon-btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                      >
                        <path
                          d="M15.0319 9.46992L9.97188 14.5299C9.32188 13.8799 8.92188 12.9899 8.92188 11.9999C8.92188 10.0199 10.5219 8.41992 12.5019 8.41992C13.4919 8.41992 14.3819 8.81992 15.0319 9.46992Z"
                          stroke="#C6C6C6"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M18.3237 5.76998C16.5737 4.44998 14.5737 3.72998 12.5037 3.72998C8.97375 3.72998 5.68375 5.80998 3.39375 9.40998C2.49375 10.82 2.49375 13.19 3.39375 14.6C4.18375 15.84 5.10375 16.91 6.10375 17.77"
                          stroke="#C6C6C6"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8.92188 19.5302C10.0619 20.0102 11.2719 20.2702 12.5019 20.2702C16.0319 20.2702 19.3219 18.1902 21.6119 14.5902C22.5119 13.1802 22.5119 10.8102 21.6119 9.40018C21.2819 8.88018 20.9219 8.39018 20.5519 7.93018"
                          stroke="#C6C6C6"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16.0075 12.7002C15.7475 14.1102 14.5975 15.2602 13.1875 15.5202"
                          stroke="#C6C6C6"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9.97 14.5298L2.5 21.9998"
                          stroke="#C6C6C6"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M22.5013 2L15.0312 9.47"
                          stroke="#C6C6C6"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="profile-edit-btn-section">
                    <button
                      type="reset"
                      className="bi-profile-edit-common-btn cancel"
                    >
                      Cancel
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                      >
                        <path
                          d="M16.7907 14.9615C16.9668 15.1376 17.0658 15.3765 17.0658 15.6256C17.0658 15.8746 16.9668 16.1135 16.7907 16.2896C16.6146 16.4657 16.3757 16.5647 16.1266 16.5647C15.8776 16.5647 15.6387 16.4657 15.4626 16.2896L10.5024 11.3279L5.54069 16.2881C5.36457 16.4642 5.1257 16.5631 4.87663 16.5631C4.62755 16.5631 4.38868 16.4642 4.21256 16.2881C4.03644 16.1119 3.9375 15.8731 3.9375 15.624C3.9375 15.3749 4.03644 15.136 4.21256 14.9599L9.17428 9.99977L4.21413 5.03805C4.03801 4.86193 3.93906 4.62306 3.93906 4.37399C3.93906 4.12492 4.03801 3.88605 4.21413 3.70993C4.39025 3.53381 4.62912 3.43486 4.87819 3.43486C5.12726 3.43486 5.36613 3.53381 5.54225 3.70993L10.5024 8.67165L15.4641 3.70915C15.6402 3.53303 15.8791 3.43408 16.1282 3.43408C16.3773 3.43408 16.6161 3.53303 16.7922 3.70915C16.9684 3.88527 17.0673 4.12414 17.0673 4.37321C17.0673 4.62228 16.9684 4.86115 16.7922 5.03727L11.8305 9.99977L16.7907 14.9615Z"
                          fill="#C5C5C6"
                        />
                      </svg>
                    </button>
                    <button
                      type="reset"
                      className="bi-profile-edit-common-btn submit"
                    >
                      Save
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                      >
                        <path
                          d="M18.6657 6.28815L8.66569 16.2882C8.57859 16.3756 8.4751 16.4449 8.36114 16.4922C8.24719 16.5395 8.12501 16.5639 8.00163 16.5639C7.87824 16.5639 7.75606 16.5395 7.64211 16.4922C7.52815 16.4449 7.42466 16.3756 7.33756 16.2882L2.96256 11.9132C2.87536 11.8259 2.80618 11.7224 2.75899 11.6085C2.71179 11.4945 2.6875 11.3724 2.6875 11.2491C2.6875 11.1258 2.71179 11.0036 2.75899 10.8897C2.80618 10.7758 2.87536 10.6722 2.96256 10.585C3.04977 10.4978 3.1533 10.4286 3.26724 10.3814C3.38118 10.3343 3.5033 10.31 3.62663 10.31C3.74995 10.31 3.87207 10.3343 3.98601 10.3814C4.09995 10.4286 4.20348 10.4978 4.29069 10.585L8.00241 14.2967L17.3391 4.96159C17.5152 4.78547 17.7541 4.68652 18.0032 4.68652C18.2523 4.68652 18.4911 4.78547 18.6673 4.96159C18.8434 5.13771 18.9423 5.37658 18.9423 5.62565C18.9423 5.87472 18.8434 6.11359 18.6673 6.28971L18.6657 6.28815Z"
                          fill="#141414"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
      </div>

    </>
  )
}

export default ProfileEdit