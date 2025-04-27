import React from "react";
import { CircleX } from "lucide-react";
import '../pages/Profile.css'

const EditProfile = ({ closeProfile }) => {
  return (
    <div className="back">
      <button className="close-btn" onClick={closeProfile} type="button">
        <CircleX size={24} />
      </button>
      <div className="profile-pic">
        <img src="/Sung Jin Woo - icon.jpeg" alt="Profile" />
      </div>
      <h1 className="name">SUNG JINWOO</h1>
      <form className="edit-profile-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" placeholder="Enter your name" />

        <label htmlFor="title">Alias:</label>
        <input
          id="title"
          placeholder="Claim your Title (e.g., Shadow Monarch)"
        ></input>

        <label htmlFor="bio">Bio:</label>
        <textarea
          id="bio"
          placeholder="Leave a trace… or remain a shadow."
        ></textarea>

        <div className="button-group">
          <button>Save Changes</button>
          <button type="button" onClick={closeProfile}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
