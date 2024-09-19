import { useState } from "react";
import { SearchIcon } from "../data/Icon.jsx";
import { contacts } from "../data/temporaryData.js";
import { Link } from "react-router-dom";
const MessageBox = () => {
    const [openSearch, setOpenSearch] = useState(false)
    const [searchText , setSearchText] = useState("")
    const handleChange = (e) => {
        setSearchText(e.target.value.toLowerCase())
    }
    const filteredMessages = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(searchText)
      );
  return (
    <>
        <div className="bi-home-page-right-content-box">
          <div className="bi-right-side-content-box-title">
            <span> Messages </span>
            <form  className="bi-content-box-search-section">
              <div className="left-side">
                <input type="text" className={`${openSearch ? "active" : ''}`} onChange={handleChange} />
                <span className="bi-post-react-btn" onClick={()=> setOpenSearch(!openSearch)}>
                  <SearchIcon />
                </span>
              </div>
              <div className="right-side"></div>
            </form>
          </div>
          <ul className="bi-groups-list-container">
            <li className="bi-group-list-item"></li>
            {filteredMessages.map((contact, index) => {
              return (
                <Link to={"/"} key={index} className="bi-group-list-item">
                  <div className="bi-group-list-item-link">
                    <div className="bi-group-image">
                      <img src={contact.image} alt="" />
                    </div>
                    <div className="bi-group-list-item-text">
                      <span className="bi-group-name">{contact.name}</span>
                      <span className="bi-group-member">
                        <span className="bi-msg-text">{contact.message}</span>
                        <span>{contact.time}</span>
                      </span>
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

export default MessageBox