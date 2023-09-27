import React from "react";
// import { UserInfoDisplay } from "./UserInfoDisplay";
export const UserNameForm = ({ handleClick, handleInputChange }) => {
  // const [userName, setUserName] = useState("");
  return (
    <>
      <form>
        <input
          type="text"
          id="userName"
          placeholder="enter username"
          onChange={handleInputChange}
        />
        <button type="button" onClick={handleClick}>
          Find User Info
        </button>
      </form>
    </>
  );
};
