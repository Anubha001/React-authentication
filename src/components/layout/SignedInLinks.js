import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = props => {
  return (
    <div>
      <ul className="right">
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SignedInLinks;
