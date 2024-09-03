import { Link } from "react-router-dom";
import { groupsToJoin } from "../data/temporaryData";

const GroupViewRightSide = () => {
  return (
    <>
      <section className="bi-page-right-wrapper suggest--peoples">
        <div className="connected--people--wrapper">
          <div className="invitation--header">
            <h4 className="nr--common--subHeader">Suggested Groups</h4>
          </div>

          <div className="connected--people--suggestion suggest--peoples">
           {
            groupsToJoin.map((group, index) => {
              return(
                <Link to={`/group/${group.id}`} key={index}>
                <div className="invitation--item">
                  <div className="invitation--item--img--content--wrapper">
                    <div className="invitation--item--img">
                      <div className="nr--invitation--item--img--img groupCreate">
                        <img
                          src={group.image}
                          alt="not found"
                        />
                      </div>
                    </div>
  
                    <div className="invitation--item--content">
                      <h3 className="nr--peoples--name--common groupCreateTharee">
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
                </div>
              </Link>
              )
            })
           }

            
          </div>
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

export default GroupViewRightSide;
