import counter from "../actionsType/counter";

const counterAction = {
    incrementCount: (dispatch) => { dispatch({ type: counter.INCREMENT }) },
    decrementCount: (dispatch) => { dispatch({ type: counter.DECREMENT }) },
    resetCount: (dispatch) => { dispatch({ type: counter.RESET }) }
}

export default counterAction;