import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import { todosReducer } from "./redux/Reducer/ActionReducer";
const store = createStore(
    todosReducer,
    applyMiddleware(thunk)
  );

export default store
