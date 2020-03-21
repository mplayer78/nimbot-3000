import React, { useState, useEffect, useReducer, useContext } from "react";
import "./App.css";
import GameScreen from "./gameScreen";
import { WelcomeScreen } from "./welcomeScreen";

function reducer(state, action) {
  switch (action.type) {
    case "start_game":
      const whosTurn = state.counter % 3 === 0 ? 1 : 2;
      return {
        ...state,
        turn: whosTurn,
        gameVisible: true
      };
    case "take_turn":
      return {
        ...state,
        turn: action.player === "2" ? 1 : 2,
        counter: state.counter - action.counterChoice
      };
    case "set_counter":
      return { ...state, counter: action.input };
    case "reset_game":
      return { ...state, gameVisible: false, counter: 0, turn: 0 };
    default:
      throw new Error();
  }
}

export const GameContext = React.createContext();

const initialState = { counter: 0, gameVisible: false, turn: 2 };

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <div className="Container">
        <GameContext.Provider value={{ state, dispatch }}>
          {!state.gameVisible ? <WelcomeScreen /> : <GameScreen />}
        </GameContext.Provider>
      </div>
    </div>
  );
}

export default App;
