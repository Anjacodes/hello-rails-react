const FETCH_GREETINGS = 'FETCH_GREETINGS';

const initialState = '';

export const fetchGreetings = () => async (dispatch) => {
  await fetch('http://localhost:3000/v1/greetings')
    .then((response) => response.json())
    .then((data) => {
      dispatch({ type: FETCH_GREETINGS, payload: data})
    })
}

// REDUCER

const greetingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GREETINGS:
      return action.payload;
    default:
      return state;
  }
};

export default greetingsReducer;