import React, { useEffect } from "react";
import { GameContext } from "./App";
import { useContext } from "react";

export default function MyTurn(props) {
  const { dispatch, state } = useContext(GameContext);
  const decision = state.counter % 3 === 1 ? 1 : 2;
  useEffect(() => {
    const time = setTimeout(() => {
      dispatch({ type: "take_turn", player: "2", counterChoice: decision });
    }, 2000);
    return () => {
      clearTimeout(time);
    };
  }, []);
  return (
    <>
      <h3>
        I think that this time I will take... {decision} piece
        {decision === 2 && "s"}
      </h3>
    </>
  );
}
