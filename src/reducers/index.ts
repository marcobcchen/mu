import { combineReducers } from 'redux'
import auth from './authReducer'
import toastMessage from './toastMessageReducer'
import loading from './loadingReducer'

const index = combineReducers({ auth, toastMessage, loading })

export default index
