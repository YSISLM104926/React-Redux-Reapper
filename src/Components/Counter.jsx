import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCounter, incrementCounter, resetCounter } from '../Services/Action/ActionCounter';

const Counter = () => {
    const count = useSelector((state) => state.count)
    const dispatch = useDispatch();
    const handlePlus = () => {
        dispatch(incrementCounter())
    }
    const handleMinus = () => {
        dispatch(decrementCounter())
    }
    const handleReset = () => {
        dispatch(resetCounter())
    }
    return (
        <div>
            <h1>RRR App</h1>
            <h1>Count : {count}</h1>
            <div className='flex gap-6 mt-6'>
                <button onClick={handlePlus} className="btn btn-active btn-accent">Increment</button>
                <button onClick={handleMinus} className="btn btn-active btn-ghost">Decrement</button>
                <button onClick={handleReset} className="btn btn-secondary">Reset</button>
            </div>
        </div>
    )
}

export default Counter