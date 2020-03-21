import React, { useContext } from "react";
import StyledButton from "./assets/styledButton";
import { GameContext } from "./state/GameContext";

export default function(props) {
  const { dispatch } = useContext(GameContext);

  return (
    <>
      <h2>Good game but it looks like I won... Play again?</h2>
      <StyledButton onClick={() => dispatch({ type: "reset_game" })}>
        Play Again
      </StyledButton>
    </>
  );
}
