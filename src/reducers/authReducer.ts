import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../constants/actionTypes'

const INIT_STATE = {
  authenticated: '',
}
const authReducer = (state: any = null, action: any) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, authenticated: action.payload }
    case LOGIN_FAILURE:
      return state

    default:
      return state
  }
}

export default authReducer
