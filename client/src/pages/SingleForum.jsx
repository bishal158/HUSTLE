import LeftSide from "../components/LeftSide.jsx";
import {Link} from "react-router-dom";

export const SingleForum = () => {
    return (
        <>
            <div className="bi-left--sidebar--wrapper">
                <LeftSide/>
            </div>
            <div className="bi-page-center-wrapper forum-page">

                <div className="bi-forum-page-content-wrapper">
                    <Link to={'/forums'} className="back-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="10" viewBox="0 0 20 10" fill="none">
                            <path d="M4.75 8.75L1 5M1 5L4.75 1.25M1 5H19" stroke="white" strokeWidth="1.5"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Link>
                    <div className="bi-forum-page-content-body">
                        <div className="bi-forum-page-forums-wrapper ">


                            <div className="bi-post-wrapper single-forums-post-wrapper  ">

                                <div className="bi-post-header ">

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
                                                <span className="bi-post-user-name">Jenny Wilson</span>
                                                <span className="bi-post-time">
                                  Top Contributor
                                </span>
                                            </div>
                                            <span className="bi-post-location">
                                New York, United States
                              </span>
                                        </div>
                                    </div>
                                    <div className="bi-post-header-right">
                                        <svg id="post-dot-btn" xmlns="http://www.w3.org/2000/svg" width="24" height="25"
                                             viewBox="0 0 24 25" fill="none">
                                            <path
                                                d="M19 14.5C20.1 14.5 21 13.6 21 12.5C21 11.4 20.1 10.5 19 10.5C17.9 10.5 17 11.4 17 12.5C17 13.6 17.9 14.5 19 14.5Z"
                                                fill="#B3BAC5" stroke="#B3BAC5" strokeWidth="0.5"/>
                                            <path
                                                d="M5 14.5C6.1 14.5 7 13.6 7 12.5C7 11.4 6.1 10.5 5 10.5C3.9 10.5 3 11.4 3 12.5C3 13.6 3.9 14.5 5 14.5Z"
                                                fill="#B3BAC5" stroke="#B3BAC5" strokeWidth="0.5"/>
                                            <path
                                                d="M12 14.5C13.1 14.5 14 13.6 14 12.5C14 11.4 13.1 10.5 12 10.5C10.9 10.5 10 11.4 10 12.5C10 13.6 10.9 14.5 12 14.5Z"
                                                fill="#B3BAC5" stroke="#B3BAC5" strokeWidth="0.5"/>
                                        </svg>
                                        <div className="bi-post-delete-actions">
                                            <button className="bi-post-action-btn">
                                                <span>Remove</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" height="14" width="12.25"
                                                     viewBox="0 0 448 512">
                                                    <path fill="#fafafa"
                                                          d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z"/>
                                                </svg>
                                            </button>
                                            <button className="bi-post-action-btn">
                                                <span>Hide</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" height="14" width="17.5"
                                                     viewBox="0 0 640 512">
                                                    <path fill="#eff0f0"
                                                          d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm9.4 130.3C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5l-41.9-33zM192 256c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5z"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="bi-post-description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate velit esse cillum
                                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt
                                    mollit anisdf sfs sf.
                                </div>

                                <div className="bi-post-image-wrapper child--exceeded">

                                    <div className="bi-post-image">
                                        <a href="./assets/images/post-image-1.png">
                                            <img src="./assets/images/post-image-1.png" alt="post img"/>
                                        </a>
                                    </div>

                                    <div className="bi-post-image">
                                        <a href="./assets/images/post-image-2.png">
                                            <img src="./assets/images/post-image-2.png" alt="post img"/>

                                        </a>


                                    </div>

                                    <div className="bi-post-image">
                                        <a href="./assets/images/post-image-2.png">
                                            <img src="./assets/images/post-image-2.png" alt="post img"/>

                                        </a>

                                    </div>


                                </div>

                                <div className="bi-forums-btns">

                                    <button className="forum-common-btn react-btn ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                             viewBox="0 0 20 20" fill="none">
                                            <path
                                                d="M5.5275 8.5415C6.19917 8.5415 6.805 8.16984 7.22 7.6415C7.86688 6.81618 8.67893 6.13499 9.60417 5.6415C10.2067 5.3215 10.7292 4.84484 10.9817 4.21234C11.159 3.76921 11.2501 3.2963 11.25 2.819V2.2915C11.25 2.12574 11.3159 1.96677 11.4331 1.84956C11.5503 1.73235 11.7092 1.6665 11.875 1.6665C12.3723 1.6665 12.8492 1.86405 13.2008 2.21568C13.5525 2.56731 13.75 3.04422 13.75 3.5415C13.75 4.5015 13.5333 5.41067 13.1475 6.22317C12.9258 6.68817 13.2367 7.2915 13.7517 7.2915M13.7517 7.2915H16.3567C17.2117 7.2915 17.9775 7.86984 18.0683 8.72067C18.1058 9.07234 18.125 9.429 18.125 9.7915C18.1284 12.0718 17.3492 14.2842 15.9175 16.059C15.5942 16.4607 15.095 16.6665 14.58 16.6665H11.2333C10.8308 16.6665 10.43 16.6015 10.0475 16.4748L7.4525 15.6082C7.07009 15.481 6.66968 15.4163 6.26667 15.4165H4.92M13.7517 7.2915H11.875M4.92 15.4165C4.98917 15.5873 5.06417 15.754 5.145 15.9182C5.30917 16.2515 5.08 16.6665 4.70917 16.6665H3.9525C3.21167 16.6665 2.525 16.2348 2.30917 15.5265C2.02054 14.5792 1.87422 13.5943 1.875 12.604C1.875 11.3098 2.12084 10.074 2.5675 8.939C2.8225 8.294 3.4725 7.9165 4.16667 7.9165H5.04417C5.4375 7.9165 5.665 8.37984 5.46084 8.7165C4.74908 9.88813 4.37369 11.2331 4.37584 12.604C4.37584 13.599 4.56917 14.5482 4.92084 15.4165H4.92Z"
                                                stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                        <span>1.2k</span>
                                    </button>

                                    <a href="#" className="forum-common-btn active">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                             viewBox="0 0 20 20" fill="none">
                                            <path
                                                d="M16.875 7.0925C17.6117 7.32917 18.125 8.0325 18.125 8.84V12.4117C18.125 13.3583 17.4192 14.1617 16.475 14.2392C16.1917 14.2617 15.9083 14.2825 15.625 14.2992V16.875L13.125 14.375C11.9967 14.375 10.88 14.3292 9.775 14.2392C9.53444 14.2197 9.30044 14.1511 9.0875 14.0375M16.875 7.0925C16.7462 7.05106 16.6131 7.02449 16.4783 7.01334C14.2466 6.82807 12.0034 6.82807 9.77167 7.01334C8.82917 7.09167 8.125 7.89417 8.125 8.84V12.4117C8.125 13.1092 8.50833 13.7283 9.0875 14.0375M16.875 7.0925V5.53083C16.875 4.18 15.915 3.00917 14.575 2.835C12.8507 2.61149 11.1137 2.49959 9.375 2.5C7.6125 2.5 5.87667 2.61417 4.175 2.835C2.835 3.00917 1.875 4.18 1.875 5.53083V10.7192C1.875 12.07 2.835 13.2408 4.175 13.415C4.65583 13.4775 5.13917 13.5317 5.625 13.5767V17.5L9.0875 14.0375"
                                                stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                        <span>61</span>
                                    </a>

                                    <button className="forum-common-btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                             viewBox="0 0 20 20" fill="none">
                                            <path
                                                d="M12.1595 4.37129C12.0833 4.29949 11.9713 4.27989 11.8751 4.32109C11.7787 4.36249 11.7163 4.45689 11.7163 4.56129V6.94169C9.46692 7.00629 7.33552 7.87489 5.68892 9.40369C3.98612 10.9845 2.95932 13.1213 2.79752 15.4201C2.78952 15.5343 2.85712 15.6405 2.96432 15.6819C2.99532 15.6939 3.02772 15.6997 3.05972 15.6997C3.13812 15.6997 3.21432 15.6647 3.26532 15.6011C5.33512 13.0177 8.40311 11.5065 11.7163 11.4285V13.8859C11.7163 13.9903 11.7787 14.0847 11.8751 14.1261C11.9715 14.1675 12.0833 14.1477 12.1595 14.0759L17.1147 9.41349C17.1671 9.36409 17.1969 9.29549 17.1969 9.22349C17.1969 9.15149 17.1671 9.08289 17.1147 9.03349L12.1595 4.37109V4.37129ZM12.2417 13.2789V11.1639C12.2417 11.0945 12.2139 11.0279 12.1647 10.9789C12.1155 10.9299 12.0487 10.9023 11.9789 10.9023C10.1713 10.9035 8.43892 11.3037 6.82992 12.0915C5.55612 12.7153 4.39212 13.5801 3.42292 14.6181C4.12132 10.5463 7.72712 7.46429 11.9793 7.46049C12.1243 7.46049 12.2419 7.34329 12.2419 7.19909V5.16829L14.2761 7.08229L16.5517 9.22349L12.2417 13.2787V13.2789Z"
                                                fill="white"/>
                                        </svg>
                                        <span>1.2k</span>
                                    </button>
                                </div>


                                <div className="bi-post-comments-wrapper">

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
                                                sed do eiusmod tempor incididunt ut labore et dolore
                                                magna aliqua.
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
                                                sed do eiusmod tempor incididunt ut labore et dolore
                                                magna aliqua.
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
                                                sed do eiusmod tempor incididunt ut labore et dolore
                                                magna aliqua.
                                            </div>
                                        </div>
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