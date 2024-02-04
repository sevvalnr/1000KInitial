import React, { useState } from "react";

const Profile = () => {
  // State for form inputs
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle changes in the email input
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Function to handle changes in the username input
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  // Function to handle changes in the password input
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <h2>Profile</h2>
      <form>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={handleUsernameChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default Profile;
