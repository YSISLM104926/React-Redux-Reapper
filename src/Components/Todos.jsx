import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getAllDatas from '../redux/Action/ActionTodos';

const Todos = () => {
    const { error, isLoading, todos } = useSelector(state => state);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllDatas());
    }, [dispatch]);
    return (
        <div>
            <h1>RRR App</h1>
            <div className='flex gap-6 mt-6'>
                {isLoading && <h1>Loading...</h1>}
                {error && <h1>{error}</h1>}
                {todos && todos.map(todo => (
                        <h1 className='p-12' key={todo.id}>{todo.title}</h1>
                ))}
            </div>
        </div>
    );
};

export default Todos;
