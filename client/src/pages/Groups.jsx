import { Link } from "react-router-dom";
import GroupRightSide from "../components/GroupRightSide";
import LeftSide from "../components/LeftSide";
import { groupsToJoin } from "../data/temporaryData";
const Groups = () => {
  return (
    <>
      <div className="bi-left--sidebar--wrapper">
        <LeftSide />
      </div>
      <div className="bi-page-center-wrapper">
        <div className="nr-peoples-page-contents-wrapper">
          <div className="invitation--wrapper">
            <div className="invitation--header">
              <h4 className="nr--common--subHeader">Groups you manage</h4>

              <button
                className="nr--group--create--btn"
                data-bs-toggle="modal"
                data-bs-target="#create--aGroup--modal"
              >
                <span className="nr--create--group--text">Create a Group</span>
                <div className="nr--create--group--button--svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M16.862 4.487L18.549 2.799C18.9007 2.44733 19.3777 2.24976 19.875 2.24976C20.3723 2.24976 20.8493 2.44733 21.201 2.799C21.5527 3.15068 21.7502 3.62766 21.7502 4.125C21.7502 4.62235 21.5527 5.09933 21.201 5.451L10.582 16.07C10.0533 16.5984 9.40137 16.9867 8.685 17.2L6 18L6.8 15.315C7.01328 14.5986 7.40163 13.9467 7.93 13.418L16.862 4.487ZM16.862 4.487L19.5 7.125M18 14V18.75C18 19.3467 17.7629 19.919 17.341 20.341C16.919 20.763 16.3467 21 15.75 21H5.25C4.65326 21 4.08097 20.763 3.65901 20.341C3.23705 19.919 3 19.3467 3 18.75V8.25C3 7.65327 3.23705 7.08097 3.65901 6.65901C4.08097 6.23706 4.65326 6 5.25 6H10"
                      stroke="#141414"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
            </div>

            <div className="invitation--main nr--create--group">
              {groupsToJoin.map((group, index) => {
                return (
                  <div className="invitation--item" key={index}>
                    <div className="invitation--item--img--content--wrapper">
                      <div className="invitation--item--img">
                        <div className="nr--invitation--item--img--img groupCreate">
                          <img src={group.image} alt="not found" />
                        </div>
                      </div>

                      <div className="invitation--item--content">
                        <h3 className="nr--peoples--name--common groupCreate">
                          {group.description}
                        </h3>

                        <div className="invitation--item--content--mutal groupCreate">
                          <h4 className="nr--peoples--followers--common">
                            {group.status} group
                          </h4>
                          <h5 className="nr--peoples--followers--common">
                            {group.members} members
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="invitation--item--btns">
                      <Link
                        to={`/group/${group.id}`}
                        className="nr--ignore--btn"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="nr--people--you--know--wrapper">
            <div className="invitation--header">
              <h4 className="nr--common--subHeader">Groups you’ve joined</h4>
            </div>

            <div className="nr--people--you--know--card--main">
              {groupsToJoin.map((group, index) => {
                return (
                  <Link to={`/group/${group.id}`} className="nr--people--you--know--card" key={index}>
                    <div className="nr--people--you--know--cover--photo">
                      <div className="nr--people--you--know--cover--photo--img nr--create--group">
                        <img
                          src={group.image}
                          alt="not found"
                        />
                      </div>
                    </div>

                    <div className="nr--people--you--know--card--content--wrapper">
                      <div className="nr--people--you--know--userNames nr--create--group">
                        <p className="nr--peoples--name--common">
                          {group.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="bi-right--sidebar--wrapper peoples-page groupSuggest">
        <GroupRightSide />
      </div>
    </>
  );
};

export default Groups;
