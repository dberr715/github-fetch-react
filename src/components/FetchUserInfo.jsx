import { useState } from "react";

import { UserInfoDisplay } from "./UserInfoDisplay";
import { UserNameForm } from "./UserNameForm";

export const FetchUserInfo = () => {
  const [userName, setUserName] = useState("");
  const [userInfo, setUserInfo] = useState("User Info will show here");
  const [userDisplay, setUserDisplay] = useState();

  console.log(userInfo);
  const handleInputChange = (e) => {
    setUserName(e.target.value);
  };
  const handleClick = (e) => {
    // setUserName(userInfo);
    // setUserInfo("");
    getUserInfo(userName);
    setUserName("");
  };
  //   setUserInfo(data.name);
  const getUserInfo = (userName) => {
    // const apiUrl = `https://api.github.com/users/dberr715`;
    const apiUrl = `https://api.github.com/users/${userName}`;

    const getInfo = async () => {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setUserDisplay(data);
    };
    getInfo();
  };

  return (
    <>
      <h1>Github User Info</h1>
      <UserNameForm
        handleInputChange={handleInputChange}
        handleClick={handleClick}
      />
      {/* <form>
        <input
          type="text"
          id="userName"
          placeholder="enter username"
          onChange={handleInputChange}
        />
        <button type="button" onClick={handleClick}>
          Find User Info
        </button>
      </form> */}
      <h2>User Info:</h2>
      <UserInfoDisplay userDisplay={userDisplay} />
      {/* <ul>
        <li>{userDisplay.name}</li>
        <li>{userDisplay.location}</li>
        <li>{userDisplay.public_repos}</li>
        <li>
          <img src={userDisplay.avatar_url} alt="Profile Pic" />
        </li>
      </ul> */}
    </>
  );
};
