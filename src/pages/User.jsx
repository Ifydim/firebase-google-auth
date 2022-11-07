import React, { useEffect, useState } from "react";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=108")
      .then((resp) => resp.json())
      .then((userData) => setUsers(userData.results));
  }, []);

  const mapUsers = () => {
    return users.map((user) => (
      <div className="profile">
        <img src={user.picture.large} alt={user.login.username} />
        <p>{user.login.username}</p>
      </div>
    ));
    // login.username
    // picture.medium
  };
  return (
    <div className="app">
      <h1>Home Page</h1>
      <div className="user">{mapUsers()}</div>
    </div>
  );
};

export default Home;
