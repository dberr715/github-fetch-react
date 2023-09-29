import { useState } from "react";
import styled from "styled-components";
import { UserInfoDisplay } from "./UserInfoDisplay";
import { UserNameForm } from "./UserNameForm";

const MainWrapper = styled.div`
  background-image: repeating-linear-gradient(
    190deg,
    blue 1%,
    yellow 5%,
    green 15%
  );
`;

const HeaderWrap = styled.div`
  background-color: #7873a3;
  border: dashed 3px red;
`;

export const FetchUserInfo = () => {
  const [userName, setUserName] = useState("");
  //   const [userInfo, setUserInfo] = useState("User Info will show here");
  const [userDisplay, setUserDisplay] = useState();

  const handleInputChange = (e) => {
    setUserName(e.target.value);
    // setUserName("");
    // setUserDisplay("");
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
    <MainWrapper>
      <HeaderWrap>
        <h1>Github User Info</h1>
      </HeaderWrap>
      <UserNameForm
        handleInputChange={handleInputChange}
        handleClick={handleClick}
        userName={userName}
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
    </MainWrapper>
  );
};
