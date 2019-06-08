// Action Types
export const Types = {
  REQUEST: 'LOGIN_REQUEST',
  SUCCESS: 'LOGIN_SUCCESS',
  FAILURE: 'LOGIN_FAILURE',
}

// reducers
const INITIAL_STATE = {
  username: null,
  error: false,
  loading: false,
}

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST:
      return { ...state, loading: true }
    case Types.SUCCESS:
      return {
        ...state,
        username: action.payload.username,
        error: false,
        loading: false,
      }
    case Types.FAILURE:
      return { ...state, error: true, loading: false }
    default:
      return state
  }
}

// action creators
export const Creators = {
  loginRequest: username => ({
    type: Types.REQUEST,
    payload: { username },
  }),

  loginSuccess: username => ({
    type: Types.SUCCESS,
    payload: { username },
  }),

  loginFailure: () => ({
    type: Types.FAILURE,
  }),
}
