import axios from 'axios';

// Intial State

const initialState = [];

// Action Types

const GET_FOOS = 'GET_FOOS';

// Reducer

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_FOOS:
      return action.foos;
    default:
      return state;
  }
}

// Actions

export function getFoos() {
  return dispatch => {
    axios
      .get('/foos')
      .then(response => {
        dispatch({
          type: GET_FOOS,
          foos: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
}
