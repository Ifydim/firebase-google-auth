import React from "react";
import Navbar from "../components/Navbar";
import { UserAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Account = () => {
  const { logOut, user } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Navbar />

      <div className="acct-page">
        <h1 className="acct">Account</h1>
        <div className="acct">
          <p>Welcome, {user?.displayName}</p>
          <Link to="/home" className="btn">
            Go to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Account;
