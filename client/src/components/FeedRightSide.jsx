import {  groups } from "../data/temporaryData.js";
import Contacts from "./Contacts.jsx";
import MessageBox from './MessageBox.jsx'
import { Link } from "react-router-dom";

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
            {groups.map((group, index) => {
              return (
                <Link to={"/"} key={index} className="bi-group-list-item">
                  <div className="bi-group-list-item-link">
                    <div className="bi-group-image">
                      <img src={group.image} alt="" />
                    </div>
                    <div className="bi-group-list-item-text">
                      <span className="bi-group-name">{group.name}</span>
                      <span className="bi-group-member">
                        {group.members} members
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </ul>
        </div>

        <Contacts/>

        <MessageBox/>
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
