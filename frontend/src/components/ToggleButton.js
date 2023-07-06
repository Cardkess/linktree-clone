import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggle } from "../store/toggleButtonSlice";
import { TiArrowBack } from "react-icons/ti";
import { BsThreeDots } from "react-icons/bs";

import { useLocation, useNavigate  } from "react-router-dom";

export default function ToggleButton() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [currentRoute, setCurrentRoute] = useState("");

  useEffect(() => {
    // This code will run whenever the current route changes
    setCurrentRoute(location.pathname);
  }, [location.pathname]); // Run the effect only when location.pathname changes

  const navigation = () => {
    if (currentRoute !== "/") {
      navigate(-1); // Navigate to the previous page
    } else {
      dispatch(toggle());
    }
  };

  return (
    <div onClick={ navigation } className="menu-toggle">
      {currentRoute !== "/" && <TiArrowBack className="back-arrow" />}
      {currentRoute === "/" && <BsThreeDots />}
    </div>
  );
}
