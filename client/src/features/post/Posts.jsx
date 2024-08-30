import { WhatsNew } from "../../components/WhatsNew"

const Posts = () => {
  return (
    <>
        <div className="bi-home-page-content-wrapper">
          <WhatsNew/>
          <div className="bi-home-page-contents">
            <div className="bi-post-wrapper" data-post-wrapper>
              <div className="bi-post-header">
                <div className="bi-post-header-left">
                  <span className="bi-post-user-img">
                    <img
                      src="assets/images/bi-user-img-2.png"
                      alt=""
                      srcSet=""
                    />
                  </span>
                  <div className="bi-user-info">
                    <div className="bi-user-name-and-icon">
                      <a
                        href="viewerProfile.html"
                        className="bi-post-user-name"
                      >
                        Jenny Wilson
                      </a>
                      <span className="bi-post-time">
                        2d
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="12"
                          viewBox="0 0 14 12"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.47751 3.17494C8.47751 4.93745 7.03524 6.34988 5.23549 6.34988C3.4364 6.34988 1.99348 4.93745 1.99348 3.17494C1.99348 1.41243 3.4364 0 5.23549 0C7.03524 0 8.47751 1.41243 8.47751 3.17494ZM0.335938 9.94491C0.335938 8.31336 2.59296 7.90516 5.23549 7.90516C7.89238 7.90516 10.135 8.32742 10.135 9.96024C10.135 11.5918 7.87803 12 5.23549 12C2.5786 12 0.335938 11.5777 0.335938 9.94491ZM9.78488 3.2325C9.78488 4.13004 9.50961 4.96754 9.02689 5.66321C8.97666 5.73476 9.02102 5.83122 9.10843 5.84656C9.22976 5.86636 9.35435 5.8785 9.48156 5.88105C10.7471 5.91363 11.8827 5.11574 12.1965 3.91412C12.6616 2.13117 11.297 0.530285 9.55853 0.530285C9.37001 0.530285 9.18932 0.54945 9.01319 0.584585C8.98906 0.589696 8.96297 0.601195 8.94992 0.621637C8.93296 0.647828 8.94535 0.681686 8.96231 0.704045C9.48482 1.42144 9.78488 2.29471 9.78488 3.2325ZM11.8808 7.13487C12.7314 7.29777 13.2904 7.62931 13.522 8.1129C13.7184 8.50897 13.7184 8.96892 13.522 9.36499C13.1678 10.1137 12.0249 10.3545 11.5807 10.4165C11.4887 10.4293 11.415 10.3526 11.4248 10.2619C11.6518 8.187 9.84686 7.20322 9.3798 6.97708C9.36023 6.96622 9.35566 6.95089 9.35762 6.94066C9.35892 6.93428 9.3674 6.92405 9.38241 6.92214C10.3928 6.90297 11.4796 7.03904 11.8808 7.13487Z"
                            fill="#5A5C5F"
                          />
                        </svg>
                      </span>
                    </div>
                    <span className="bi-post-location">
                      New York, United States
                    </span>
                  </div>
                </div>
                <div className="bi-post-header-right">
                  <svg
                    id="post-dot-btn"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M19 14.5C20.1 14.5 21 13.6 21 12.5C21 11.4 20.1 10.5 19 10.5C17.9 10.5 17 11.4 17 12.5C17 13.6 17.9 14.5 19 14.5Z"
                      fill="#B3BAC5"
                      stroke="#B3BAC5"
                      strokeWidth="0.5"
                    />
                    <path
                      d="M5 14.5C6.1 14.5 7 13.6 7 12.5C7 11.4 6.1 10.5 5 10.5C3.9 10.5 3 11.4 3 12.5C3 13.6 3.9 14.5 5 14.5Z"
                      fill="#B3BAC5"
                      stroke="#B3BAC5"
                      strokeWidth="0.5"
                    />
                    <path
                      d="M12 14.5C13.1 14.5 14 13.6 14 12.5C14 11.4 13.1 10.5 12 10.5C10.9 10.5 10 11.4 10 12.5C10 13.6 10.9 14.5 12 14.5Z"
                      fill="#B3BAC5"
                      stroke="#B3BAC5"
                      strokeWidth="0.5"
                    />
                  </svg>
                  <div className="bi-post-delete-actions">
                    <button className="bi-post-action-btn">
                      <span>Remove</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="14"
                        width="12.25"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="#fafafa"
                          d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z"
                        />
                      </svg>
                    </button>
                    <button className="bi-post-action-btn">
                      <span>Hide</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="14"
                        width="17.5"
                        viewBox="0 0 640 512"
                      >
                        <path
                          fill="#eff0f0"
                          d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm9.4 130.3C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5l-41.9-33zM192 256c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className="bi-post-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anisdf sfs sf.
              </div>

              <div className="bi-post-image-wrapper child--exceeded">
                <div className="bi-post-image">
                  <a href="./assets/images/post-image-1.png">
                    <img
                      src="./assets/images/post-image-1.png"
                      alt="post img"
                    />
                  </a>
                </div>

                <div className="bi-post-image">
                  <a href="./assets/images/post-image-2.png">
                    <img
                      src="./assets/images/post-image-2.png"
                      alt="post img"
                    />
                  </a>
                </div>

                <div className="bi-post-image">
                  <a href="./assets/images/post-image-2.png">
                    <img
                      src="./assets/images/post-image-2.png"
                      alt="post img"
                    />
                  </a>
                </div>

                <div className="bi-post-image">
                  <a href="./assets/images/post-image-1.png">
                    <img
                      src="./assets/images/post-image-1.png"
                      alt="post img"
                    />
                  </a>
                </div>
              </div>

              <div className="bi-post-btn-and-counter-wrapper">
                <div className="bi-post-btns-container">
                  <div className="bi-post-btns-left">
                    <button className="bi-post-react-btn react-btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="24"
                        viewBox="0 0 28 24"
                        fill="none"
                      >
                        <path
                          d="M26.08 3.58934C25.1021 2.3045 23.7207 1.38566 22.1577 0.980435C20.5947 0.575208 18.9409 0.707115 17.4619 1.35496C16.1381 1.92621 14.9575 2.88934 14 4.16746C13.0425 2.88621 11.8619 1.92309 10.5381 1.35496C9.05913 0.707115 7.4053 0.575208 5.84231 0.980435C4.27933 1.38566 2.89792 2.3045 1.92 3.58934C0.88875 4.94059 0.34375 6.62934 0.34375 8.47246C0.34375 11.125 1.92563 14.035 5.045 17.125C7.58687 19.6418 10.5906 21.7031 12.1544 22.7075C12.7054 23.0601 13.3458 23.2475 14 23.2475C14.6542 23.2475 15.2946 23.0601 15.8456 22.7075C17.4081 21.7031 20.4131 19.6418 22.955 17.125C26.0744 14.0362 27.6562 11.125 27.6562 8.47246C27.6562 6.62934 27.1112 4.94059 26.08 3.58934Z"
                          stroke="#FFF"
                          fill="#040D12"
                        />
                      </svg>
                    </button>

                    <button className="bi-post-react-btn" data-comment-btn>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                      >
                        <path
                          d="M7.89775 24.4232C5.43931 22.1735 4.03906 19.0085 4.03906 15.6631C4.03906 9.11521 9.36613 3.78809 15.9141 3.78809C22.462 3.78809 27.7891 9.11521 27.7891 15.6631C27.7891 23.4873 20.2917 29.2308 12.6948 27.0955C6.73719 28.4645 7.04881 28.4131 6.91406 28.4131C6.45037 28.4131 6.14725 27.9242 6.35506 27.5085L7.89775 24.4232ZM12.7123 25.825C12.7721 25.825 12.8319 25.8336 12.8899 25.8508C19.7317 27.8788 26.5391 22.714 26.5391 15.663C26.5391 9.8044 21.7727 5.03802 15.9141 5.03802C10.0554 5.03802 5.28906 9.8044 5.28906 15.663C5.28906 18.804 6.66894 21.7675 9.07487 23.7936C9.1822 23.884 9.25599 24.0079 9.28437 24.1453C9.31274 24.2827 9.29405 24.4257 9.23131 24.5512L8.0665 26.8806C12.8069 25.7925 12.5784 25.825 12.7123 25.825Z"
                          fill="white"
                        />
                      </svg>
                    </button>

                    <button className="bi-post-react-btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                      >
                        <path
                          d="M29.6864 2.66172C29.3787 2.23499 28.8856 2 28.2978 2C28.0219 2 27.726 2.05201 27.4186 2.15455L3.60487 10.092C2.78233 10.3661 2.21541 10.9264 2.04943 11.6292C1.88344 12.3321 2.13988 13.0869 2.75302 13.7002C2.81297 13.7602 2.88186 13.8105 2.95723 13.8494L12.9831 19.0172L18.1514 29.0426C18.1903 29.1179 18.2406 29.1868 18.3005 29.2467C18.7932 29.7395 19.3614 29.9999 19.9439 30H19.944C20.8261 30 21.5791 29.3849 21.9089 28.395L29.8469 4.58261C30.0965 3.83372 30.0394 3.15155 29.6864 2.66172ZM3.64622 12.0063C3.67761 11.8733 3.86061 11.7362 4.12367 11.6484L26.7264 4.1146L13.4357 17.4046L3.83534 12.4562C3.69074 12.2872 3.61926 12.1205 3.64622 12.0063ZM20.3524 27.8762C20.2745 28.1098 20.1264 28.3593 19.944 28.3593C19.8336 28.3593 19.689 28.2878 19.5446 28.1644L14.5958 18.5646L27.8869 5.27435L20.3524 27.8762Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="bi-post-btns-right">
                    <button className="bi-post-react-btn react-btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                      >
                        <path
                          d="M23.5338 0H8.47131C6.57012 0 5.02344 1.54675 5.02344 3.44794V29.7661C5.02344 31.415 5.93494 32 6.71544 32C7.278 32 7.84438 31.7188 8.39888 31.1643L16.0024 23.5607L23.6061 31.1643C24.1606 31.7188 24.727 31.9999 25.2896 32H25.2897C25.8477 32 26.3402 31.7139 26.6408 31.2149C26.867 30.8395 26.9817 30.352 26.9817 29.7661V3.44794C26.9817 1.54675 25.435 0 23.5338 0ZM25.1067 29.7661C25.1067 29.8534 25.1025 29.9264 25.0961 29.9872C25.0388 29.9406 24.984 29.8909 24.9319 29.8385L16.6653 21.5719C16.4895 21.3961 16.2511 21.2974 16.0024 21.2974C15.7538 21.2974 15.5154 21.3961 15.3396 21.5719L7.073 29.8385C7.02109 29.8909 6.96647 29.9406 6.90938 29.9873C6.90182 29.9138 6.89817 29.84 6.89844 29.7661V3.44794C6.89844 2.58063 7.604 1.875 8.47131 1.875H23.5338C24.4011 1.875 25.1067 2.58063 25.1067 3.44794V29.7661Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="bi-post-cmnt-like-container">
                  <div className="bi-post-cmnt-like-left">
                    <span className="cmnt-section-text"> 19,456 Likes</span>
                  </div>
                  <div className="bi-post-cmnt-like-right">
                    <span className="cmnt-section-text">23 Comments .</span>
                    <span className="cmnt-section-text"> 45 Shares </span>
                  </div>
                </div>
              </div>

              <form className="bi-post-comment-box-wrapper">
                <input
                  className="bi-post-comment-box-input"
                  type="text"
                  placeholder="Add a comment..."
                />
                <button type="submit" className="bi-post-cmnt-box-btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M13.8432 0.330859C13.6894 0.117496 13.4428 0 13.1489 0C13.0109 0 12.863 0.0260039 12.7093 0.0772733L0.802437 4.04599C0.391166 4.18307 0.107706 4.4632 0.0247129 4.81462C-0.0582797 5.16607 0.0699418 5.54347 0.376509 5.8501C0.406484 5.88009 0.440929 5.90526 0.478615 5.9247L5.49156 8.50859L8.07571 13.5213C8.09513 13.559 8.12028 13.5934 8.15025 13.6234C8.3966 13.8697 8.68072 14 8.97194 14H8.97202C9.41305 14 9.78954 13.6924 9.95446 13.1975L13.9235 1.29131C14.0482 0.916861 14.0197 0.575776 13.8432 0.330859ZM0.82311 5.00316C0.838806 4.93663 0.930303 4.86808 1.06183 4.82422L12.3632 1.0573L5.71784 7.70228L0.917669 5.22809C0.845369 5.1436 0.809629 5.06025 0.82311 5.00316ZM9.17618 12.9381C9.13725 13.0549 9.06319 13.1797 8.97202 13.1797C8.91679 13.1797 8.84449 13.1439 8.77232 13.0822L6.29791 8.28232L12.9434 1.63718L9.17618 12.9381Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </form>

              <div className="bi-post-all-comments-section">
                <div className="single-comment-box">
                  <div className="comment-user-image">
                    <img
                      src="assets/images/contact-user-1.png"
                      alt=""
                      srcSet=""
                    />
                  </div>
                  <div className="commnet-user-info">
                    <a href="profile.html" className="comment-user-name">
                      <b>Jenny Wilson</b>
                      <small className="comment-time">9 minute ago</small>
                    </a>
                    <div className="comment-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </div>
                  </div>
                </div>
                <div className="single-comment-box">
                  <div className="comment-user-image">
                    <img
                      src="assets/images/contact-user-1.png"
                      alt=""
                      srcSet=""
                    />
                  </div>
                  <div className="commnet-user-info">
                    <a href="profile.html" className="comment-user-name">
                      <b>Jenny Wilson</b>

                      <small className="comment-time">9 minute ago</small>
                    </a>
                    <div className="comment-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Posts;