import {contacts, groups} from "../data/temporaryData.js";
import {Link} from "react-router-dom";

const FeedRightSide = () => {
  return (
    <>
      <section className="bi-page-right-wrapper home-page">
        <div className="bi-home-page-right-content-box">
          <div className="bi-right-side-content-box-title">
            <span> Groups </span>
            <form action="" className="bi-content-box-search-section">
              <div className="right-side"></div>
            </form>
          </div>
          <ul className="bi-groups-list-container">

            {
              groups.map((group, index) =>{
                return(
                    <Link to={'/'} key={index} className="bi-group-list-item">
                      <div className="bi-group-list-item-link">
                        <div className="bi-group-image">
                          <img src={group.image} alt=""/>
                        </div>
                        <div className="bi-group-list-item-text">
                          <span className="bi-group-name">{group.name}</span>
                          <span className="bi-group-member">{group.members} members</span>
                        </div>
                      </div>
                    </Link>
                )
              })
            }

          </ul>
        </div>

        <div className="bi-home-page-right-content-box">
          <div className="bi-right-side-content-box-title">
            <span> Contacts </span>
            <form action="" className="bi-content-box-search-section">
              <div className="left-side">
                <input type="text"/>
                <span className="bi-post-react-btn">
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
                </span>
              </div>
              <div className="right-side"></div>
            </form>
          </div>
          <ul className="bi-groups-list-container">

            {
              contacts.map((contact, index)=>{
                return (
                    <Link to={'/'} className="bi-group-list-item" key={index}>
                      <div  className="bi-group-list-item-link">
                        <div className="bi-group-image">
                          <img src={contact.image} alt=""/>
                        </div>
                        <div className="bi-group-list-item-text">
                          <span className="bi-group-name">{contact.name}</span>
                        </div>
                      </div>
                    </Link>
                )
              })
            }
          </ul>
        </div>

        <div className="bi-home-page-right-content-box">
          <div className="bi-right-side-content-box-title">
            <span> Messages </span>
            <form action="" className="bi-content-box-search-section">
              <div className="left-side">
                <input type="text"/>
                <span className="bi-post-react-btn">
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
                </span>
              </div>
              <div className="right-side"></div>
            </form>
          </div>
          <ul className="bi-groups-list-container">
            <li className="bi-group-list-item">

            </li>
            {
              contacts.map((contact, index) =>{
                return(
                    <Link to={'/'} key={index} className="bi-group-list-item">
                      <div className="bi-group-list-item-link">
                        <div className="bi-group-image">
                          <img src={contact.image} alt=""/>
                        </div>
                        <div className="bi-group-list-item-text">
                          <span className="bi-group-name">{contact.name}</span>
                          <span className="bi-group-member">
                    <span className="bi-msg-text">
                      {contact.message}
                    </span>
                    <span>{contact.time}</span>
                  </span>
                        </div>
                      </div>
                    </Link>
                )
              })
            }
          </ul>
        </div>
      </section>
      <div className="common-side-opener bi-right-side-opener">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
        >
          <path
              d="M15.75 19.5L8.25 12L15.75 4.5"
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

export default FeedRightSide;
