import React, { useContext } from "react";
import "./Homepage.css";
import UserContext from "../UserContext";
import JoblyImg from "../Jobly.png";


function Homepage() {
  const { currentUser } = useContext(UserContext);
  console.debug("Homepage", "currentUser=", currentUser);

  return (
      <div className="Homepage"
      style={{ backgroundImage: `url(${JoblyImg})` }}>
      <h1>Jobly</h1>
      <br></br>
      <h2>Your new job is just a click away.</h2>
      
      </div>
     
  );
}

export default Homepage;
