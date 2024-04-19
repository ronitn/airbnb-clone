import React from "react";
import logo from "../../assets/logo/long-logo.png";
import "./styles.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LanguageIcon from "@mui/icons-material/Language";
import BasicMenu from "./ProfileMenu";
import SimpleBottomNavigation from "./BottomNav";
import MobileSearchBar from "../MobileSearchBar";

function Header() {
  return (
    <div>
      <div className="navbar">
        <img src={logo} alt="logo" className="navbar-logo" />
        <div className="search-bar">
          <div className="search-bar-text">Search Destination</div>
          <div className="search-bar-text">Add Date</div>
          <div className="search-bar-text2">Add guests</div>
          <div className="search-icon-div">
            <SearchRoundedIcon className="search-icon" />
          </div>
        </div>
        <div className="profile-container">
          <div className="airbnb-your-home">Airbnb your home</div>
          <div className="airbnb-your-home">
            <LanguageIcon sx={{ fontSize: "1.3rem" }} />
          </div>
          <div className="profile-div">
            <BasicMenu />
          </div>
        </div>
        <MobileSearchBar />
        <SimpleBottomNavigation />
      </div>
    </div>
  );
}

export default Header;
