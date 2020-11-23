import {applyMiddleware, createStore} from "redux";
import axios from "axios"
import thunk from "redux-thunk";


const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_DATA_SUCCESS":
      return action.payload;
    default:
      return state

  }
};

const store = createStore(reducer, [], applyMiddleware(thunk));

function fetchSearchResults() {
  return function (dispatch) {
    return axios.get("./mock.json")
      .then (
        (result) => {
          dispatch({
            type: "FETCH_DATA_SUCCESS",
            payload: result.data.data
          })
        }).catch(
          (err) => {
            console.log(err)
          })
  }
}

store.dispatch(fetchSearchResults());

export default store
