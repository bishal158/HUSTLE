import LeftSide from "../components/LeftSide";
import GroupViewRightSide from "../components/GroupViewRightSide";
import groupViewBack from '../assets/groupViewBack.png'
import Posts from "../features/post/Posts";
const GroupView = () => {
  return (
    <>
      <div className="bi-left--sidebar--wrapper">
        <LeftSide />
      </div>
      <div className="bi-page-center-wrapper">
        <div className="bi-group-view-page-contents">
          <div
            className="bi-group-view-page-banner"
            style={{
              backgroundImage: `url(${groupViewBack})`,
            
          }}
          >
            <div className="bi-group-info">
              <div className="group-logo">
                <img src="assets/images/groupCreateLogo.png" alt="" srcSet="" />
              </div>
              <div className="group-description">
                <h3 className="group-top-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod pam.
                </h3>
                <p className="group-member">
                  <span>4,859k members</span> <span>10+ posts a day</span>
                </p>
              </div>
            </div>
            <div className="group-btns">
              <button className="group-common-btn group-joined-btn">
                Joined
              </button>
              <button className="group-common-btn group-joined-btn">
                Invite
              </button>
              <button className="group-common-btn group-joined-btn">
                Invite
              </button>
            </div>
          </div>
          <div className="bi-group-view-page-posts-wrapper">
            <Posts/>
          </div>
        </div>
      </div>
      <div className="bi-right--sidebar--wrapper group-view-page">
        <GroupViewRightSide />
      </div>
    </>
  );
};

export default GroupView;
