import React, { useContext } from "react";
import MyTurn from "./myTurn";
import YourTurn from "./yourTurn";
import Counter from "./assets/counter";
import IWon from "./iWon";
import { GameContext } from "./App";

export default function(props) {
  const { state, dispatch } = useContext(GameContext);
  let counterArray = [];
  for (let i = state.counter; i > 0; i--) {
    counterArray.push(i);
  }
  if (state.counter > 0) {
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 150px",
          maxWidth: "600px",
          alignItems: "center"
        }}
      >
        <div className="question">
          {state.turn === 1 ? <YourTurn /> : <MyTurn />}
        </div>
        <div
          className="counters"
          style={{ display: "flex", flexDirection: "column-reverse" }}
        >
          {counterArray.map((_, i) => (
            <Counter key={i} />
          ))}
        </div>
      </div>
    );
  }
  return <IWon {...props} />;
}
