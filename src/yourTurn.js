import React from "react";
import StyledButton from "./assets/styledButton";
import { GameContext } from "./App";
import { useContext } from "react";

export default function(props) {
  const { dispatch } = useContext(GameContext);
  return (
    <>
      <h3>Your turn: So... how many pieces would you like to take?</h3>
      {[1, 2].map(v => (
        <StyledButton
          key={v}
          onClick={() => {
            dispatch({ type: "take_turn", player: "1", counterChoice: v });
          }}
        >
          {v}
        </StyledButton>
      ))}
    </>
  );
}
