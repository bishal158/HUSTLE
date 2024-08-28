import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import './styles/CommonLayout.css'
const CommonLayout = () => {
  return (
    <>
      <Header />
      <div className="bi-page-wrapper">
        <Outlet />
      </div>
      
    </>
  );
};

export default CommonLayout;
