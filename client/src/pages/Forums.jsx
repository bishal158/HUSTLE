import LeftSide from "../components/LeftSide";
import Forum from "../features/forum/Forum";

const Forums = () => {
  return (
    <>
      <div className="bi-left--sidebar--wrapper">
        <LeftSide />
      </div>
      <div className="bi-page-center-wrapper forum-page">
        <Forum />
      </div>
    </>
  );
};

export default Forums;
