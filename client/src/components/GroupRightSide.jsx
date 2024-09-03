
import { groupsToJoin } from '../data/temporaryData';
const GroupRightSide = () => {
  return (
    <>
      <section className="bi-page-right-wrapper search--peoples">
        <div className="nr--connect--people--search--wrapper">
          <form action="#">
            <div className="nr--connect--people--search">
              <div className="nr--connect--people--search--svg">
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
              </div>
              <input type="text" placeholder="Search Here" />
            </div>
          </form>
        </div>

        <div className="connected--people--wrapper suggestPeople custom">
          <div className="invitation--header">
            <h4 className="nr--common--subHeader">Suggested Groups</h4>
          </div>

          <div className="connected--people--suggestion">
          {
            groupsToJoin.map((group, index)=>{
              return(
                <div to={`/group/${group.id}`} key={index} >
                <div className="invitation--item custom groupJoined">
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
                      <h3 className="nr--peoples--name--common groupCreateTwo">
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
                    <button
                     
                      className="nr--accept--btn customs"
                    >
                      Join
                    </button>
                  </div>
                </div>
              </div>
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

export default GroupRightSide;
