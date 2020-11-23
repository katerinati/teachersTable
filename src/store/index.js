import {applyMiddleware, createStore} from "redux";
import axios from "axios"
import thunk from "redux-thunk";


const reducer = (state, action) => {
  if (action.type === "FETCH_DATA_SUCCESS") {
    return action.payload;
  } else {
    return state
  }
};

const store = createStore(reducer, [], applyMiddleware(thunk));

export function fetchSearchResults() {
  return function (dispatch) {
    return axios.get("./mock.json")
      .then((result) => {
        return new Promise((resolve) => setTimeout(() => resolve(result), 1500))
      })
      .then(
        (result) => {
          dispatch({
            type: "FETCH_DATA_SUCCESS",
            payload: result.data.data
          })
        }).catch(
        (err) => {
          //TODO
        })
  }
}


export default store
