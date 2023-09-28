import React from "react";
// import { UserInfoDisplay } from "./UserInfoDisplay";
export const UserNameForm = ({ handleClick, handleInputChange, userName }) => {
  // const [userName, setUserName] = useState("");
  return (
    <>
      <form>
        <input
          type="text"
          id="userName"
          placeholder="enter username"
          onChange={handleInputChange}
          value={userName}
        />
        <button type="button" onClick={handleClick}>
          Find User Info
        </button>
      </form>
    </>
  );
};
