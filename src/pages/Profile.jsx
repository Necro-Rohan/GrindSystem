import React, {useState, useEffect, useRef} from "react";
import { CircleX } from "lucide-react";
import {ImagePlus} from "lucide-react";
import '../styles/Profile.css';

function Profile({
  closeProfile,
  profileImg,
  setProfileImg,
  profileName,
  setProfileName,
  profileTitle,
  setProfileTitle,
  profileLevel,
  profileXP,
  totalProfileXP,
  profileProgress,
  setProfileProgress,
  handleLogout,
  setProfileBio,
  profileBio,
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  const newNameRef = useRef(null);
  const newTitleRef = useRef(null);
  const newBioRef = useRef(null);
  const formRef = useRef(null);

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImg(reader.result);
        localStorage.setItem("profileImg", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };


  useEffect(() => {
    const progress = Math.floor((profileXP / totalProfileXP) * 100);
    setProfileProgress(progress);
    localStorage.setItem("profileProgress", progress);
  }, [profileXP, totalProfileXP, profileLevel, setProfileProgress]);

  const handleSaveChanges = (e) => {
    e.preventDefault();
    if (newNameRef.current.value) {
      setProfileName(newNameRef.current.value.toUpperCase());
      localStorage.setItem(
        "profileName",
        newNameRef.current.value.toUpperCase()
      );
    }
    if (newTitleRef.current.value) {
      setProfileTitle(newTitleRef.current.value);
      localStorage.setItem("profileTitle", newTitleRef.current.value);
    }
    if (newBioRef.current.value) {
      setProfileBio(newBioRef.current.value);
      localStorage.setItem("profileBio", newBioRef.current.value);
    }
    formRef.current.reset();
    handleFlip();
  };
  const handleCancel = () => {
    formRef.current.reset();
    handleFlip();
  };


  return (
    <div className="profile-wrapper">
      <div className={`profile-card ${isFlipped ? "flipped" : ""}`}>
        <div className="front">
          <div className="card-inner">
            <button className="close-btn" onClick={closeProfile} type="button">
              <CircleX size={24} />
            </button>
            <div className="profile-info">
              <div className="profile-pic">
                <img src={profileImg} alt="Profile" />
                <label className="change-image-btn">
                  <ImagePlus size={24} />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </label>
              </div>
              <div className="profile-name-title">
                <h1 className="name">{profileName}</h1>
                <p className="title">{profileTitle}</p>
              </div>
            </div>
            <div className="level-info">
              <p>LEVEL {profileLevel}</p>
              <div className="progress-xp-container">
                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{ width: `${profileProgress}%` }}
                  ></div>
                </div>
                <p>
                  {profileXP} / {totalProfileXP} XP
                </p>
              </div>
            </div>
            <div className="bio-section">
              <p>Bio.</p>
              <div>{profileBio}</div>
            </div>
            <div className="button-group">
              <button onClick={handleFlip}>Edit Profile</button>
              <button onClick={handleLogout}>Log Out</button>
            </div>
          </div>
        </div>
        <div className="back">
          <div className="card-inner">
            <button className="close-btn" onClick={closeProfile} type="button">
              <CircleX size={24} />
            </button>
            <div className="profile-info">
              <div className="profile-pic">
                <img src={profileImg} alt="Profile" />
                <label className="change-image-btn">
                  <ImagePlus size={24} />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </label>
              </div>
              <h1 className="name">{profileName}</h1>
            </div>
            <form className="edit-profile-form" ref={formRef}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                ref={newNameRef}
                required
              />

              <label htmlFor="title">Alias:</label>
              <input
                id="title"
                type="text"
                ref={newTitleRef}
                placeholder="Claim your Title (e.g., Shadow Monarch)"
                required
              ></input>

              <label htmlFor="bio">Bio:</label>
              <textarea
                id="bio"
                placeholder="Leave a trace… or remain a shadow."
                ref={newBioRef}
                rows="4"
                cols="30"
                required
              ></textarea>

              <div className="button-group">
                <button onClick={handleSaveChanges}>Save Changes</button>
                <button onClick={handleCancel} type="button">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
