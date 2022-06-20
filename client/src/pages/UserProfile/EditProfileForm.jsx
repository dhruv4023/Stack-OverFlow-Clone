import moment from "moment";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProfile } from "../../actions/users";

export default function EditProfileForm({ currentUser, setSwitch }) {
  // console.log(currentUser?.result?.tags)
  const [name, setName] = useState(currentUser?.result?.name);
  const [about, setAbout] = useState(currentUser?.result?.about);
  const [tags, setTags] = useState([]);
  const [age, setAge] = useState();
  const dispatch = useDispatch();
  
  // console.log(currentUser)
  // console.log(tags)
  // console.log(currentUser?.result?.tags)
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name, about, tags )
    if (tags.length === 0) {
      dispatch(
        updateProfile(currentUser?.result?._id, {
          name,
          about,
          tags: currentUser?.result?.tags,
          age,
        })
      );
    } else {
      dispatch(
        updateProfile(currentUser?.result?._id, { name, about, tags, age })
      );
    }
    setSwitch(false);
  };
  return (
    <div>
      <h1 className="editProfileTitle">Edit Your Profile</h1>
      <h2 className="editProfileTitle2">Public information</h2>
      <form className="editProfileForm" onSubmit={handleSubmit}>
        <label htmlFor="name">
          <h3>Display name</h3>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="name">
          <h3>Date of Birthday</h3>
          <input
            type="date"
            value={age}
            min="1990-01-01"
            max={moment().format("YYYY-MM-DD")}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <label htmlFor="about">
          <h3>About me</h3>
          <textarea
            id="about"
            cols="30"
            rows="10"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          ></textarea>
        </label>
        <label htmlFor="tags">
          <h3>Watched tags</h3>
          <p>Add tags separated by 1 space</p>
          <input
            type="text"
            id="tags"
            // value={tags.split("")}
            onChange={(e) => setTags(e.target.value.split(" "))}
          />
        </label>
        <br />
        <input type="submit" value="Save profile" className="userSubmitBtn" />
        <button
          type="button"
          className="userCancelBtn"
          onClick={() => setSwitch(false)}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
