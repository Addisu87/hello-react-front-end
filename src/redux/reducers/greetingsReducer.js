// constant
const DISPLAY_GREETING = 'DISPLAY_GREETING';

// Action creator for display greeting
const displayGreeting = (payload) => ({
  type: DISPLAY_GREETING,
  payload,
});

// initial states
const initialState = {
  messages: [],
};

// Reducer for greeting
const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_GREETING:
      return { ...state, message: [action.payload.messages] };
    default:
      return state;
  }
};

// get (load) greetings from API
export const fetchGreetingAPI = () => async (dispatch) => {
  const response = await fetch('http://localhost:3000/v1/greetings');
  const greeting = await response.json();
  dispatch(displayGreeting(greeting));
};

export default greetingReducer;
