import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "./Auth";

const Account = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      console.log("You are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div>
      <div className="container mt-5">
        <h1>Account</h1>
        <p>User Email: {user && user.email}</p>
        <p>This is the dashboard, if you can see this you're logged in</p>
        <button onClick={() => handleLogout()} className="btn btn-danger">
          Sign Out
        </button>
      </div>
    </div>
  );
};
export default Account;
