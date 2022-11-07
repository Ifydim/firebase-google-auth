import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import React from "react";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const handleGoogleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {user?.displayName ? (
        <button className="log-btn" onClick={handleGoogleSignOut}>
          LogOut
        </button>
      ) : (
        <Link to="/">Sign In</Link>
      )}
    </div>
  );
};

export default Navbar;
