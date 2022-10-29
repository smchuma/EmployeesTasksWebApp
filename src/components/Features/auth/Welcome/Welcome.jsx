import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  const date = new Date();
  const today = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "long",
  }).format(date);
  return (
    <>
      <div className="welcome">
        <p>{today}</p>
        <h1>Welcome</h1>
        <Link to="/dash/tasks">
          <h1>View Tasks</h1>
        </Link>
        <Link to="/dash/users">
          <h1>View user profile</h1>
        </Link>
      </div>
    </>
  );
};

export default Welcome;
