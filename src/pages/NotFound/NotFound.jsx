import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  useEffect(() => {
    document.title = "Page Not Found — ACT Centre";
  }, []);

  return (
    <div className="notfound-page">
      <div className="notfound-inner">
        <p className="notfound-code">404</p>
        <h1 className="notfound-title">Page not found</h1>
        <p className="notfound-body">
          The page you are looking for does not exist or may have been moved.
        </p>
        <Link to="/" className="btn btn-primary">
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
