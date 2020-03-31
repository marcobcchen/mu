import {
  TOAST_MESSAGE_SUCCESS,
  TOAST_MESSAGE_FAILURE,
  TOAST_MESSAGE_INFO,
  TOAST_MESSAGE_WARNING,
} from '../constants/actionTypes'

const INIT_STATE = {
  type: '',
  message: '',
}

const toastMessageReducer = (state: any = INIT_STATE, action: any) => {
  switch (action.type) {
    case TOAST_MESSAGE_SUCCESS:
      return { ...state, type: 'success', message: action.payload }
    case TOAST_MESSAGE_FAILURE:
      return { ...state, type: 'failure', message: action.payload }
    case TOAST_MESSAGE_INFO:
      return { ...state, type: 'info', message: action.payload }
    case TOAST_MESSAGE_WARNING:
      return { ...state, type: 'warning', message: action.payload }
    default:
      return state
  }
}

export default toastMessageReducer
