import React from "react";
import "./Public.scss";
import image from "../../assets/images/image.png";

const Public = () => {
  return (
    <div className="container">
      <div className="container-content">
        <div className="heading">
          <h1>
            Emp<span>Tasks</span>
          </h1>
          <h3>Manage Your Employee's Tasks</h3>
          <p>
            Emptasks makes it simple for business personnel to manage their
            tasks, allowing managers to assign tasks and employees to monitor
            their progress.
          </p>
        </div>
      </div>
      <div className="image">
        <img src={image} alt="banner" width="100%" />
      </div>
    </div>
  );
};

export default Public;
