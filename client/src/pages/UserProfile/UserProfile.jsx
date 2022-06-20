import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBirthdayCake, faPen } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import Avtar from "../../components/Avtar/Avtar";
import EditProfileForm from "./EditProfileForm";
import ProfileBio from "./ProfileBio";
import "./UsersProfile.css";

export default function UserProfile() {
  const { id } = useParams();
  const users = useSelector((state) => state.currentUserProfileReducer);
  const currentProfile = users.filter((user) => user._id === id)[0];
  // console.log(currentProfile);
  const currentUser = useSelector((state) => state.currentUserReducer);
  // const User = useSelector((state) => state.currentUserReducer);
  const [Switch, setSwitch] = useState(false);
  // console.log(currentProfile);

  return (
    <div className="homeContainer1">
      <LeftSidebar />
      <div className="homeContainer2">
        <section>
          <div className="userDetailsContainer">
            <div className="userDetails">
              <Avtar
                backgroundColor="purple"
                color="white"
                fontSize="50px"
                px="40px"
                py="30px"
              >
                {currentProfile?.name.charAt(0).toUpperCase()}
              </Avtar>
              <div className="userName">
                <h1>{currentProfile?.name}</h1>
                <p>
                  {currentProfile?.age && (
                    <>
                      <FontAwesomeIcon icon={faBirthdayCake} /> Age is{" "}
                      <>
                        {moment(Date.now()).year() -
                          moment(currentProfile?.age).year()}
                      </>{" "}
                      years
                    </>
                  )}
                </p>
                <p>Joined {moment(currentProfile?.joinedOn).fromNow()}</p>
              </div>
            </div>
            {currentUser?.result._id === id && (
              <button
                type="button"
                onClick={() => setSwitch(true)}
                className="editProfileBtn"
              >
                <FontAwesomeIcon icon={faPen} /> Edit Profile
              </button>
            )}
          </div>
          <>
            {Switch ? (
              <EditProfileForm
                currentUser={currentUser}
                setSwitch={setSwitch}
              />
            ) : (
              <ProfileBio currentProfile={currentProfile} />
            )}
          </>
        </section>
      </div>
    </div>
  );
}
