import React, { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "./Sample";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import '../CSS/User.css'

const UserSettings = () => {
  const [toggle, setToggle] = useState(false);
  const [username, setUsername] = useState("");
  const { user, setUser } = useContext(UserContext);
  let history = useHistory();

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleDelete = () => {
    try {
      axios.delete(`/api/auth/destroy/${user.id}`);
      setUser({});
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  const updateUsername = (val) => {
    setUsername(val);
  };

  const handleUsernameUpdate = (username) => {
    try {
      if (username !== "") {
        axios.put(`/api/auth/update/${user.id}`, { username });
        toast.success("Username updated");
        setUsername("");
      } else toast.info("Please enter a valid username.");
    } catch (err) {
      console.log(err);
    }
  };

  const removeUsername = () => {
    try {
      axios.put(`/api/auth/remove/${user.id}`);
      toast.success("Username removed from database!");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="settings-container">
      <button
				onClick={handleToggle}
				>user settings
			</button>
      {toggle ? (
        <div className="user-settings">
          <div className="input-container">
            <input
              placeholder="Enter username"
              type="username"
              value={username}
              onChange={(e) => updateUsername(e.target.value)}
            />
            <div className="email-buttons">
              <button onClick={() => handleUsernameUpdate(username)}>Update</button>
              <button
                onClick={() => {
                  const confirmBox = window.confirm(
                    "Select OK if you want to remove your username from the database."
                  );
                  if (confirmBox) {
                    removeUsername();
                  }
                }}
              >
                Delete
              </button>
            </div>
          </div>
          <ToastContainer position="bottom-right" autoClose={2300} />
          <div className="delete-account">
            <button
              onClick={() => {
                const confirmBox = window.confirm(
                  "This will permanently delete your account, as well as any associated reviews and watchlist items. Are you sure?"
                );
                if (confirmBox) {
                  handleDelete();
                }
              }}
            >
              Delete Account
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default UserSettings;
