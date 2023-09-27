import React from "react";
// import { FetchUserInfo } from "./FetchUserInfo";
export const UserInfoDisplay = ({ userDisplay }) => {
  if (!userDisplay) {
    return;
  }
  {
    return (
      <>
        <ul>
          <li>{userDisplay.name}</li>
          <li>{userDisplay.location}</li>
          <li>{userDisplay.public_repos}</li>

          <img src={userDisplay.avatar_url} alt="Profile Pic" />
        </ul>
      </>
    );
  }
};
