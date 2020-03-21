import React, { useContext } from "react";
import { StyledInput } from "./StyledInput";
import StyledButton from "./assets/styledButton";
import { GameContext } from "./state/GameContext";

export function WelcomeScreen(props) {
  const { dispatch } = useContext(GameContext);
  return (
    <>
      <h1>Welcome to the NimBOT 3000</h1>
      <h3>Would you like a game of Nim?</h3>
      <ul>
        The rules are simple:
        <li>We take it in turns to remove 1 or 2 counters from the pile</li>
        <li>The last person to take be able to take any counters... WINS!</li>
      </ul>
      <label>
        <p>How many counters would you like to play with to start?</p>
        <StyledInput
          type="number"
          onChange={e =>
            dispatch({ type: "set_counter", input: e.target.value })
          }
          value={props.form}
        />
      </label>
      <StyledButton
        onClick={() => {
          dispatch({ type: "start_game" });
        }}
      >
        Play!
      </StyledButton>
    </>
  );
}
