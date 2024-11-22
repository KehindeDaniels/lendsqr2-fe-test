import React from "react";
import { errorIcon } from "../../assets"; // Make sure this path is correct
import "./error.scss";
const NotFound: React.FC = () => {
  return (
    <div className="error-container">
      <img src={errorIcon} alt="Error Icon" className="error-icon" />
      <h1>Page Not Found</h1>
      <p>Hmm, we can't seem to find the page you're looking for.</p>
      <button onClick={() => window.history.back()}>Go Back</button>
    </div>
  );
};

export default NotFound;
