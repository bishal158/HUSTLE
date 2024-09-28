import { WhatsNew } from "../../components/WhatsNew";
import { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {fetchPosts} from "./postSlice.js"
import {

  BookMarkIcon,
  CommentIcon,
  EyeSlashIcon,
  HeartIcon,
  ShareIcon,
  TagIcon,
  ThreeDotIcon,
  TrashIcon,
} from "../../data/Icon.jsx";

const Posts = () => {
  const dispatch = useDispatch();
  const { posts, status, error } = useSelector((state) => state.posts);
  const [openLightboxIndex, setOpenLightboxIndex] = useState(null);
  const [openCommentSections, setOpenCommentSections] = useState({});
  const [openMore, setOpenMore] = useState({});
  const toggleCommentSection = (index) => {
    setOpenCommentSections((prevState) => ({
      ...prevState,
      [index]: !prevState[index], // Toggle the specific post's comment section
    }));
  };
  const openMoreBox = (index) => {
    setOpenMore((prevState) => ({
      ...prevState,
      [index]: !prevState[index], // Toggle the specific post's more options
    }));
  };

  const handleLightboxOpen = (index) => {
    setOpenLightboxIndex(index);
  };

  const handleLightboxClose = () => {
    setOpenLightboxIndex(null);
  };

  // Fetch posts when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchPosts());
      } catch (error) {
        console.error("Failed to fetch posts: ", error);
      }
    };

    fetchData();
  }, [dispatch]);

  // Handle loading and error states
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <WhatsNew />
      <div className="bi-home-page-contents">
        {posts.map((post, index) => (
          <div className="bi-post-wrapper" key={index}>
            {/* Post Header */}
            <div className="bi-post-header">
              <div className="bi-post-header-left">
                <span className="bi-post-user-img">
                  <img src={post.posted_by_image} alt="" />
                </span>
                <div className="bi-user-info">
                  <div className="bi-user-name-and-icon">
                    <Link to="/" className="bi-post-user-name">
                      {post.posted_by}
                    </Link>
                    <span className="bi-post-time">
                      {post.posting_time}
                      <TagIcon />
                    </span>
                  </div>
                  <span className="bi-post-location">
                    {post.posted_city}, {post.posted_states}
                  </span>
                </div>
              </div>
              <div className="bi-post-header-right">
                <button
                  className="more_options_btn"
                  onClick={() => openMoreBox(index)}
                >
                  <ThreeDotIcon />
                </button>

                <div
                  className={`bi-post-delete-actions ${
                    openMore[index] ? "active" : ""
                  }`}
                >
                  <button className="bi-post-action-btn">
                    <span>Remove</span>
                    <TrashIcon />
                  </button>
                  <button className="bi-post-action-btn">
                    <span>Hide</span>
                    <EyeSlashIcon />
                  </button>
                </div>
              </div>
            </div>

            {/* Post Description */}
            <div className="bi-post-description">{post.post_text}</div>

            {/* Post Images */}
            <div className="bi-post-image-wrapper child--exceeded">
              {post.images.slice(0, 2).map((image, imgIndex) => (
                <div key={imgIndex} className="bi-post-image">
                  <div onClick={() => handleLightboxOpen(index)}>
                    <img src={image} alt={`post img ${imgIndex + 1}`} />
                    {imgIndex === 1 && post.images.length > 2 && (
                      <div className="see--more--div">
                        +{post.images.length - 2} More
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {openLightboxIndex === index && (
                <Lightbox
                  plugins={[Counter]}
                  counter={{
                    container: { style: { top: "unset", bottom: 0 } },
                  }}
                  open={true}
                  close={handleLightboxClose}
                  slides={post.images.map((image) => ({ src: image }))}
                />
              )}
            </div>

            {/* Post Buttons and Counters */}
            <div className="bi-post-btn-and-counter-wrapper">
              <div className="bi-post-btns-container">
                <div className="bi-post-btns-left">
                  <button className="bi-post-react-btn react-btn">
                    <HeartIcon />
                  </button>

                  <button
                    className="bi-post-react-btn"
                    onClick={() => toggleCommentSection(index)}
                    data-comment-btn
                  >
                    <CommentIcon />
                  </button>

                  <button className="bi-post-react-btn">
                    <ShareIcon />
                  </button>
                </div>
                <div className="bi-post-btns-right">
                  <button className="bi-post-react-btn react-btn">
                    <BookMarkIcon />
                  </button>
                </div>
              </div>
              <div className="bi-post-cmnt-like-container">
                <div className="bi-post-cmnt-like-left">
                  <span className="cmnt-section-text">
                    {post.total_likes} Likes
                  </span>
                </div>
                <div className="bi-post-cmnt-like-right">
                  <span className="cmnt-section-text">
                    {post.total_comments.length} Comments
                  </span>
                  <span className="cmnt-section-text">
                    {post.total_shares} Shares
                  </span>
                </div>
              </div>
            </div>

            {/* Comment Box */}
            <form className="bi-post-comment-box-wrapper">
              <input
                className="bi-post-comment-box-input"
                type="text"
                placeholder="Add a comment..."
              />
              <button type="submit" className="bi-post-cmnt-box-btn">
                <ShareIcon />
              </button>
            </form>

            {/* Comment Section */}
            <div
              className={`bi-post-all-comments-section ${
                openCommentSections[index] ? "active" : ""
              }`}
            >
              {post.total_comments.map((comment, commentIndex) => (
                <div className="single-comment-box" key={commentIndex}>
                  <div className="comment-user-image">
                    <img src={comment.comment_userimage} alt="" />
                  </div>
                  <div className="commnet-user-info">
                    <Link to="/" className="comment-user-name">
                      <b>{comment.comment_username}</b>
                      <small className="comment-time">
                        {comment.comment_time}
                      </small>
                    </Link>
                    <div className="comment-text">{comment.comment}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Posts;
