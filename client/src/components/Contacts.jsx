import { useState } from "react";
import { SearchIcon } from "../data/Icon.jsx";
import { contacts } from "../data/temporaryData.js";
import { Link } from "react-router-dom";
const Contacts = () => {
    const [openSearch, setOpenSearch] = useState(false)
    const [searchTerm, setSearchTerm] = useState("");
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value.toLowerCase()); // Update searchTerm state
      };
    const filteredContacts = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(searchTerm)
      );
    
  return (
    <>
    <div className="bi-home-page-right-content-box">
          <div className="bi-right-side-content-box-title">
            <span> Contacts </span>
            <form  className="bi-content-box-search-section">
              <div className="left-side">
              <input type="text" className={`${openSearch ? "active" : ''}`}   onChange={handleSearchChange} />
                <span className="bi-post-react-btn" onClick={()=> setOpenSearch(!openSearch)}>
                  <SearchIcon />
                </span>
              </div>
              <div className="right-side"></div>
            </form>
          </div>
          <ul className="bi-groups-list-container">
            {filteredContacts.map((contact, index) => {
              return (
                <Link to={"/"} className="bi-group-list-item" key={index}>
                  <div className="bi-group-list-item-link">
                    <div className="bi-group-image">
                      <img src={contact.image} alt="" />
                    </div>
                    <div className="bi-group-list-item-text">
                      <span className="bi-group-name">{contact.name}</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </ul>
        </div>

    </>
  )
}

export default Contacts