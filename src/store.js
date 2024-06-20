import {createStore} from 'redux'
import { counterReducer } from './Services/Reducer/ActionReducer'
export const store = createStore(counterReducer);
