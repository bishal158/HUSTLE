import { WhatsNew } from "../../components/WhatsNew";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import {Link} from "react-router-dom";
import {posts} from "../../data/temporaryData.js";
import {
    BookMarkIcon,
    CommentIcon,
    EyeSlashIcon,
    HeartIcon,
    ShareIcon,
    TagIcon,
    ThreeDotIcon,
    TrashIcon
} from "../../data/Icon.jsx";

const Posts = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  return (
    <>
      <WhatsNew />
      <div className="bi-home-page-contents">
        {
          posts.map((post,index) =>{
            return (
                <div className="bi-post-wrapper" key={index}>
                  <div className="bi-post-header">
                    <div className="bi-post-header-left">
                      <span className="bi-post-user-img">
                        <img src={post.posted_by_image} alt="" srcSet=""/>
                      </span>
                      <div className="bi-user-info">
                        <div className="bi-user-name-and-icon">
                          <Link to={'/'} className="bi-post-user-name">
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
                      <ThreeDotIcon/>
                      <div className="bi-post-delete-actions">
                        <button className="bi-post-action-btn">
                          <span>Remove</span>
                          <TrashIcon/>
                        </button>
                        <button className="bi-post-action-btn">
                          <span>Hide</span>
                          <EyeSlashIcon/>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="bi-post-description">
                    {post.post_text}
                  </div>

                  <div className="bi-post-image-wrapper child--exceeded">
                    {post.images.slice(0, 2).map((image, index) => (
                        <div key={index} className="bi-post-image">
                          <div
                              onClick={() => {

                                openLightbox(index);
                              }}
                          >
                            <img src={image} alt={`post img ${index + 1}`}/>
                            {index === 1 && post.images.length > 2 && (
                                <div className="see--more--div">
                                  +{post.images.length - 2} More
                                </div>
                            )}
                          </div>
                        </div>
                    ))}

                    {isOpen && (
                        <Lightbox
                            plugins={[Counter]}
                            counter={{container: {style: {top: "unset", bottom: 0}}}}
                            open={isOpen}
                            close={() => setIsOpen(false)}
                            slides={post.images.map((image) => ({src: image}))}
                            index={currentIndex}
                        />
                    )}
                  </div>

                  <div className="bi-post-btn-and-counter-wrapper">
                    <div className="bi-post-btns-container">
                      <div className="bi-post-btns-left">
                        <button className="bi-post-react-btn react-btn">
                          <HeartIcon/>
                        </button>

                        <button className="bi-post-react-btn" >
                          <CommentIcon/>
                        </button>

                        <button className="bi-post-react-btn">
                          <ShareIcon/>
                        </button>
                      </div>
                      <div className="bi-post-btns-right">
                        <button className="bi-post-react-btn react-btn">
                          <BookMarkIcon/>
                        </button>
                      </div>
                    </div>
                    <div className="bi-post-cmnt-like-container">
                      <div className="bi-post-cmnt-like-left">
                        <span className="cmnt-section-text"> {post.total_likes} Likes</span>
                      </div>
                      <div className="bi-post-cmnt-like-right">
                        <span className="cmnt-section-text">{post.total_comments.length} Comments</span>
                        <span className="cmnt-section-text"> {post.total_shares} Shares </span>
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
                      <ShareIcon/>
                    </button>
                  </form>

                  <div className="bi-post-all-comments-section">
                    {
                      post.comments.map((comment,index) =>{
                        return (
                            <div className="single-comment-box" key={index}>
                              <div className="comment-user-image">
                                <img src={comment.comment_userimage} alt="" srcSet=""/>
                              </div>
                              <div className="commnet-user-info">
                                <Link to={'/'}  className="comment-user-name">
                                  <b>{comment.comment_username}</b>
                                  <small className="comment-time">9 minute ago</small>
                                </Link>
                                <div className="comment-text">
                                  {comment.comment}
                                </div>
                              </div>
                            </div>
                        )
                      })
                    }


                  </div>
                </div>
            )
          })
        }
      </div>
    </>
  );
};

export default Posts;
