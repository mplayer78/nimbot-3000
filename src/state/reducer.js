export function reducer(state, action) {
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
