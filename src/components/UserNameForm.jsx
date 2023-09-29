import React from "react";
import styled from "styled-components";

const Wrapper1 = styled.div`
  button {
    background-color: #9e43d6;
    border: dotted 4px white;
    color: white;
  }
  input[type="text"] {
    background-color: #e7abab;
    border: solid 4px black;
  }
`;

export const UserNameForm = ({ handleClick, handleInputChange, userName }) => {
  // const [userName, setUserName] = useState("");
  return (
    <Wrapper1>
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
    </Wrapper1>
  );
};
