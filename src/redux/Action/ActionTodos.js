import axios from "axios";
import { GET_TODOS_FAILED, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from "../Constant/ConstantTodos";

const getAllDatas = () => {
    return async (dispatch) => { // async function defined inside getAllDatas
        dispatch({ type: GET_TODOS_REQUEST });
        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
            dispatch({ type: GET_TODOS_SUCCESS, payload: res.data });
        } catch (error) {
            dispatch({ type: GET_TODOS_FAILED, payload: error.message });
        }
    };
};

export default getAllDatas;