import counter from "../actionsType/counter";


let initialState = {
  count: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case counter.INCREMENT:
      return { ...state, count: state.count + 1 };

    case counter.DECREMENT:
      return { ...state, count: state.count - 1 };

    case counter.RESET:
      return initialState

    default:
      return state;
  }
};
