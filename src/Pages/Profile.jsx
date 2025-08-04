// src/pages/Profile.jsx
import React from 'react';

const Profile = () => {
  const username = localStorage.getItem("username");
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>Welcome, {username}@gmail.com</h2>
      <p>This is your profile page.</p>
    </div>
  );
};

export default Profile;
