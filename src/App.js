import React, { useState, useEffect } from "react";
import "./App.css";
import styled from "styled-components";

const StyledButton = styled.button`
  background: none;
  color: #ffffff;
  font-size: 2rem;
  text-transform: uppercase;
  padding: 1rem;
  margin: 1rem;
  border: solid #dddddd;
`;

const StyledInput = styled.input`
  background: none;
  color: #ffffff;
  font-size: 2rem;
  text-transform: uppercase;
  padding: 1rem;
  margin: 1rem;
  border: solid #dddddd;
  text-align: center;
`;

const Counter = styled.div`
  width: 100px;
  height: 30px;
  background: #fcce4e;
  border-radius: 50%;
  border: solid 4px #b58604;
  margin-top: -10px;
  transform: skew(45deg);
  box-shadow: -1px 1px 0px 0px #b58604, -2px 2px 0px 0px #b58604,
    -3px 3px 0px 0px #b58604, -4px 4px 0px 0px #b58604;
`;

function WelcomeScreen() {
  return (
    <>
      <h1>Welcome to the NimBOT 3000</h1>
      <h3>Would you like a game of Nim?</h3>
      <ul>
        The rules are simple:
        <li>We take it in turns to remove 1 or 2 counters from the pile</li>
        <li>The last person to take be able to take any counters... WINS!</li>
      </ul>
    </>
  );
}

function MyTurn(props) {
  const { setCounter, counter } = props;
  const decision = props.counter % 3 === 1 ? 1 : 2;
  const swapTurn = () => props.setTurn(1);
  useEffect(() => {
    const time = setTimeout(() => {
      setCounter(counter - decision);
      swapTurn();
    }, 2000);
    return () => {
      clearTimeout(time);
    };
  }, [decision, setCounter, counter, swapTurn]);
  return (
    <>
      <h3>
        I think that this time I will take... {decision} piece
        {decision === 2 && "s"}
      </h3>
    </>
  );
}

function YourTurn(props) {
  const swapTurn = () => props.setTurn(2);
  return (
    <>
      <h3>Your turn: So... how many pieces would you like to take?</h3>
      <StyledButton
        onClick={() => {
          props.setCounter(props.counter - 1);
          swapTurn();
        }}
      >
        1
      </StyledButton>
      <StyledButton
        onClick={() => {
          props.setCounter(props.counter - 2);
          swapTurn();
        }}
      >
        2
      </StyledButton>
    </>
  );
}

function IWon(props) {
  return (
    <>
      <h2>Good game but it looks like I won... Play again?</h2>
      <StyledButton onClick={() => props.resetGame()}>Play Again</StyledButton>
    </>
  );
}

function GameScreen(props) {
  let counterArray = [];
  for (let i = props.counter; i > 0; i--) {
    counterArray.push(i);
  }
  if (props.counter > 0) {
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
          {props.turn === 1 ? <YourTurn {...props} /> : <MyTurn {...props} />}
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

function App() {
  const [counter, setCounter] = useState(0);
  const [gameVisible, setGameVisible] = useState(false);
  const [form, setForm] = useState(0);
  const [turn, setTurn] = useState(2);
  const resetGame = () => {
    setGameVisible(false);
    setCounter(0);
    setForm(0);
    setTurn(2);
  };
  useEffect(() => {
    console.log("counter", counter);
    if (counter % 3 === 0) {
      setTurn(1);
    }
  }, [counter]);
  return (
    <div className="App">
      <header className="App-header">
        {!gameVisible ? (
          <>
            <WelcomeScreen />
            <label>
              <p>How many counters would you like to play with to start?</p>
              <StyledInput
                type="number"
                onChange={e => setForm(e.target.value)}
                value={form}
              />
            </label>
            <StyledButton
              onClick={async () => {
                setCounter(form);
                setGameVisible(true);
              }}
            >
              Play!
            </StyledButton>
          </>
        ) : (
          <GameScreen
            counter={counter}
            setCounter={setCounter}
            turn={turn}
            setTurn={setTurn}
            resetGame={resetGame}
          />
        )}
      </header>
      <div>Hey!!</div>
    </div>
  );
}

export default App;
