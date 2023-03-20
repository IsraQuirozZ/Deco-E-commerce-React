import React from "react";
import "./Icon.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Icon = ({ icon }) => {
  if (icon === "fb") {
    return <FacebookIcon className="icon" sx={{ fontSize: 50 }} />;
  } else if (icon === "ig") {
    return <InstagramIcon className="icon" sx={{ fontSize: 50 }} />;
  } else if (icon === "account") {
    return <PersonIcon className="icon" sx={{ fontSize: 50 }} />;
  } else if (icon === "fav") {
    return <FavoriteBorderIcon className="icon" sx={{ fontSize: 50 }} />;
  }
};

export default Icon;
