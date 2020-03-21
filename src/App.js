import React, { useReducer } from "react";
import "./App.css";
import GameScreen from "./gameScreen";
import { WelcomeScreen } from "./welcomeScreen";
import { reducer } from "./state/reducer";
import { initialState, GameContext } from "./state/GameContext";

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
