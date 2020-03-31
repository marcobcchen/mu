import { LOADING_START, LOADING_STOP } from '../constants/actionTypes'

const loadingReducer = (state: any = false, action: any) => {
  switch (action.type) {
    case LOADING_START:
      return true
    case LOADING_STOP:
      return false
    default:
      return state
  }
}

export default loadingReducer
