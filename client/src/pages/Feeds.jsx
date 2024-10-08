import FeedRightSide from "../components/FeedRightSide";
import LeftSide from "../components/LeftSide";
import Posts from "../features/post/Posts";

const Feeds = () => {
  return (
    <>
      <div className="bi-left--sidebar--wrapper">
        <LeftSide />
      </div>
      <div className="bi-page-center-wrapper">
        <div className="bi-home-page-content-wrapper">
          <Posts />
        </div>
      </div>

      <div className="bi-right--sidebar--wrapper">
        <FeedRightSide />
      </div>
    </>
  );
};

export default Feeds;
