import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import counterAction from 'src/redux/actions/counterAction';

const Index = () => {

    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter)

    return (

        <div className="App">
            <h3>Counter</h3>
            <h3>{counter.count}</h3>
            <button onClick={() => counterAction.incrementCount(dispatch)}>Increment</button>
            <button onClick={() => counterAction.resetCount(dispatch)}>Reset</button>
            <button onClick={() => counterAction.decrementCount(dispatch)}>Decrement</button>
        </div>

    )
}

export default Index

