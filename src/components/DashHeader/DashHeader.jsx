import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation } from "react-router-dom";

const DashHeader = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onGoHomeButton = () => navigate("/dash");
  let goHomeButton = null;
  if (pathname !== "/dash") {
    goHomeButton = (
      <button className="go-home" title="Home" onClick={onGoHomeButton}>
        <FontAwesomeIcon icon={faHouse} />
      </button>
    );
  }
  return (
    <>
      <div className="dash-header">
        {goHomeButton}
        <p>CurrentUser</p>
        <p>Status</p>
      </div>
    </>
  );
};

export default DashHeader;
